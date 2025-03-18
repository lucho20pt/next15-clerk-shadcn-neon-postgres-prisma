import UserLogin from '@/components/user-login'
import ThemeToggle from '@/components/theme-toggle'
import NavbarDesk from '@/components/navbar-desk'
import NavbarMob from '@/components/navbar-mob'

const Header = async () => {
  return (
    <header
      className="flex flex-row justify-around items-center p-4 gap-4 min-h-16 flex-wrap 
    bg-white text-black dark:bg-black dark:text-white border border-b-amber-500 dark:border-b-pink-500"
    >
      <h1 className="flex font-bold text-lg justify-start">SocialHub</h1>
      <nav className="flex flex-row items-center justify-end gap-4">
        <ThemeToggle />
        <NavbarDesk />
        <UserLogin />
        <NavbarMob />
      </nav>
    </header>
  )
}

export default Header
