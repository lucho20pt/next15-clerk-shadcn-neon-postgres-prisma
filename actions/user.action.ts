'use server'

import { prisma } from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'

// syncUser from Clerk to Neon
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

// getUser from Neon db
export async function getUserFromNeon(userId: string) {
  try {
    const user = prisma.user.findUnique({
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
