'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getUserFromNeon } from '@/actions/user.action'

const Authenticated = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<{
    name: string
    email: string
    image: string | null
    bio: string | null
    location: string | null
    website: string | null
  } | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const neonUser = await getUserFromNeon(userId)
        setUser(neonUser)
      } catch (err) {
        console.error('Failed to fetch user from Neon:', err)
        setError('Failed to load user data.')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-[120px]">
        <p>Loading...</p> {/* Replace with a spinner or skeleton loader */}
      </section>
    )
  }

  if (error || !user) {
    return (
      <section className="flex items-center justify-center min-h-[120px]">
        <p className="text-red-500">{error || 'User not found.'}</p>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-accent p-4 rounded-md shadow-md">
      <Image
        src={user.image || '/default-image.png'}
        alt={user.name || 'Default profile image'}
        width={120}
        height={120}
        className="rounded-full"
      />
      <aside className="text-center text-accent-foreground">
        <h2 className="text-lg font-bold">Welcome</h2>
        <p className="text-sm">{user.name}</p>
        {user.bio && <p className="text-xs italic">{user.bio}</p>}
        {user.location && <p className="text-xs">{user.location}</p>}
        {user.website && (
          <a
            href={user.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-xs"
          >
            {user.website}
          </a>
        )}
      </aside>
    </section>
  )
}

export default Authenticated

/**********************/
/* how to with clerk ?*/
/**********************/
// 'use client'

// import React from 'react'
// import { useUser } from '@clerk/nextjs'
// import Image from 'next/image'

// const Authenticated = () => {
//   const { isSignedIn, user, isLoaded } = useUser()

//   if (!isLoaded) {
//     return <p>Loading...</p> // replace this with a spinner or skeleton loader
//   }

//   if (!isSignedIn || !user) {
//     return <p className="text-red-500">Failed to load user data.</p>
//   }

//   return (
//     <section className="flex flex-col items-center justify-center gap-4 bg-accent">
//       <Image
//         src={user.imageUrl || '/default-image.png'}
//         alt={
//           user.firstName
//             ? `${user.firstName} ${user.lastName}`
//             : 'Default profile image'
//         }
//         width={120}
//         height={120}
//       />
//       <aside className="p-2 text-accent-foreground">
//         <h2>
//           <strong>Welcome</strong>
//         </h2>
//         <p>
//           {user.firstName || 'Guest'} {user.lastName || ''}
//         </p>
//       </aside>
//     </section>
//   )
// }

// export default Authenticated
