import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Sidebar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import UserLogin from '@/components/user-login'

const NavbarMob = async () => {
  const user = await currentUser()

  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline">
          <Sidebar />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription asChild>
          <ul className="flex flex-col items-center justify-center gap-4 font-bold text-xl">
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
              <li><UserLogin /></li>
            </>
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMob
