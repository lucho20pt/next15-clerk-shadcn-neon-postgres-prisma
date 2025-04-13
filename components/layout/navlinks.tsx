import React, { Fragment } from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
import UserSignedOut from '@/components/user/user-signed-out'
import UserSignedIn from '@/components/user/user-signed-in'

const Navlinks = async () => {
  const user = await currentUser()

  return (
    <Fragment>
      <li className="flex mx-auto md:hidden [&_*]:text-sm">
        <UserSignedOut />
      </li>
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

      <li className="hover:opacity-80 hover:underline">
        <Link href="/contact" aria-label="Contact">
          Contact
        </Link>
      </li>
      <li className="hidden md:flex [&_*]:text-sm">
        <UserSignedOut />
        <UserSignedIn />
      </li>
    </Fragment>
  )
}

export default Navlinks
