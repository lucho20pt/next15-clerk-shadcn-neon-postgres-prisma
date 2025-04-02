'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'

const Authenticated = () => {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <p>Loading...</p> // replace this with a spinner or skeleton loader
  }

  if (!isSignedIn || !user) {
    return <p className="text-red-500">Failed to load user data.</p>
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-accent">
      <Image
        src={user.imageUrl || '/default-image.png'}
        alt={
          user.firstName
            ? `${user.firstName} ${user.lastName}`
            : 'Default profile image'
        }
        width={120}
        height={120}
      />
      <aside className="p-2 text-accent-foreground">
        <h2>
          <strong>Welcome</strong>
        </h2>
        <p>
          {user.firstName || 'Guest'} {user.lastName || ''}
        </p>
      </aside>
    </section>
  )
}

export default Authenticated
