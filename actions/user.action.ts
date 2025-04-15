'use server'

import { prisma } from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'

/**
 * Ensures the user is persisted in the Neon database.
 * - If the user exists in Neon, it returns the user.
 * - If the user does not exist, it creates the user in Neon.
 * - If the user is not authenticated, it returns `undefined`.
 */
export async function syncUserAction() {
  try {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) return

    // existing user
    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    })

    if (existingUser) return existingUser

    // create user
    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName || ''} ${user.lastName || ''}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split('@')[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
    })

    return dbUser
  } catch (error) {
    console.log('syncUser error', error)
  }
}

/**
 * Fetches the user from the Neon database.
 * - If `userId` is provided, it fetches the user with the given `clerkId`.
 * - If `userId` is not provided, it fetches the authenticated user's `clerkId` from Clerk.
 * - Throws an error if the user is not authenticated or not found in Neon.
 */
export async function getUserFromNeon(userId?: string) {
  try {
    // Fetch userId from Clerk if not provided
    if (!userId) {
      const { userId: clerkUserId } = await auth()
      if (!clerkUserId) {
        throw new Error('User is not authenticated')
      }
      userId = clerkUserId
    }

    // Fetch user from Neon
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    })

    if (!user) {
      throw new Error('User not found in Neon database')
    }

    return user
  } catch (error) {
    console.log('getUserFromNeon error:', error)
    throw error
  }
}
