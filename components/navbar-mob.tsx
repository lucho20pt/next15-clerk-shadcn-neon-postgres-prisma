import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Sidebar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/theme-toggle'
import Navlinks from '@/components/navlinks'

const NavbarMob = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline">
          <Sidebar />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <ThemeToggle />
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
  )
}

export default NavbarMob
