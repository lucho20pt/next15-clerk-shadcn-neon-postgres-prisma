import React from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

const NavbarDesk = async () => {
  const user = await currentUser()

  return (
    <ul
      className="hidden md:flex flex-row items-center justify-center gap-4 font-bold
[&>*]:hover:opacity-80 [&>*]:hover:underline"
    >
      <li>
        <Link href="/" aria-label="Home">
          Home
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link href="/notifications" aria-label="Notifications">
              Notifications
            </Link>
          </li>
          <li>
            <Link href="/profile" aria-label="Profile">
              Profile
            </Link>
          </li>
        </>
      ) : null}
    </ul>
  )
}

export default NavbarDesk
