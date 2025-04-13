import { Fragment } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/theme/theme-toggle'
import Navlinks from '@/components/layout/navlinks'
import UserSignedIn from '@/components/user/user-signed-in'

const NavbarMob = async () => {
  return (
    <Fragment>
      <div className="flex md:hidden visible">
        <UserSignedIn />
      </div>
      <Sheet>
        <SheetTrigger asChild className="flex md:hidden">
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="flex flex-row items-center justify-start gap-6">
              <ThemeToggle />
              <UserSignedIn />
              <span className="sr-only">Menu</span>
            </SheetTitle>
          </SheetHeader>
          <SheetDescription asChild>
            <ul
              className="flex flex-col items-start justify-start gap-8 p-8 
            font-bold [&_*]:text-4xl"
            >
              <Navlinks />
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default NavbarMob
