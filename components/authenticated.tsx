import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

const Authenticated = async () => {
  const user = await currentUser()
  const userFirstName = user?.firstName || null
  const userLastName = user?.lastName || null
  const userImageUrl = user?.imageUrl || null
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-accent">
      <Image
        src={userImageUrl || './default-image.png'}
        alt={`${userFirstName || 'User'} ${userLastName || ''}`}
        width={120}
        height={120}
      />
      <aside className="p-2 text-accent-foreground">
        <h2>
          <strong>Wellcome</strong>
        </h2>
        <p>
          {userFirstName} {userLastName}
        </p>
      </aside>
    </section>
  )
}

export default Authenticated
