import Link from 'next/link'
import React from 'react'
import UserLogin from '@/components/user-login'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
  return (
    <header
      className="flex flex-row justify-center md:justify-around items-center p-4 gap-4 min-h-16 flex-wrap 
    bg-white text-black dark:bg-black dark:text-white"
    >
      <h1 className="flex font-bold text-lg justify-start">SocialNetty</h1>
      <nav className="flex flex-row items-center justify-end gap-4">
        <ThemeToggle />
        <ul
          className="flex flex-row items-center justify-center gap-4 font-bold
        [&>*]:hover:opacity-80 [&>*]:hover:underline"
        >
          <li>
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
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
        </ul>
        <UserLogin />
      </nav>
    </header>
  )
}

export default Header
