import { User } from '@prisma/client'

/**
 * Ensures the user is persisted in the Neon database.
 * - If the user exists in Neon, it returns the user.
 * - If the user does not exist, it creates the user in Neon.
 * - If the user is not authenticated, it returns `undefined`.
 */
export declare function syncUserAction(): Promise<User | undefined>

/**
 * Fetches the user from the Neon database.
 * - If `userId` is provided, it fetches the user with the given `clerkId`.
 * - If `userId` is not provided, it fetches the authenticated user's `clerkId` from Clerk.
 * - Throws an error if the user is not authenticated or not found in Neon.
 */
export declare function getUserFromNeon(userId?: string): Promise<User>
