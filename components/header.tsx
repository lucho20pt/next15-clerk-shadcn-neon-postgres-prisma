import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import NavbarDesk from '@/components/navbar-desk'
import NavbarMob from '@/components/navbar-mob'
import { currentUser } from '@clerk/nextjs/server'
import { syncUserAction } from '@/actions/user.action'

const Header = async () => {
  // const { userId } = await auth()
  const user = await currentUser()
  if (user) await syncUserAction() // POST

  return (
    <header
      className="flex flex-row justify-around items-center p-4 gap-4 min-h-16 flex-wrap 
    bg-white text-black dark:bg-black dark:text-white border border-b-amber-500 dark:border-b-pink-500"
    >
      <h1 className="flex flex-col font-bold text-lg justify-start">
        <Link href="/">BoilerPlate</Link>
        <code className="flex text-[0.6rem] flex-wrap">
          next15 clerk shadcn <br /> neon postgres prisma
        </code>
      </h1>
      <nav className="flex flex-row items-center justify-end gap-3 md:gap-6">
        <ThemeToggle />
        <NavbarDesk />
        <NavbarMob />
      </nav>
    </header>
  )
}

export default Header
