import React from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
import UserLogin from '@/components/user-login'

const NavbarDesk = async () => {
  const user = await currentUser()

  return (
    <ul className="hidden md:flex flex-row items-center justify-center gap-4 font-bold">
      <li className="hover:opacity-80 hover:underline">
        <Link href="/" aria-label="Home">
          Home
        </Link>
      </li>
      {user ? (
        <>
          <li className="hover:opacity-80 hover:underline">
            <Link href="/notifications" aria-label="Notifications">
              Notifications
            </Link>
          </li>
          <li className="hover:opacity-80 hover:underline">
            <Link href="/profile" aria-label="Profile">
              Profile
            </Link>
          </li>
        </>
      ) : null}
      <>
        <li>
          <UserLogin />
        </li>
      </>
    </ul>
  )
}

export default NavbarDesk
