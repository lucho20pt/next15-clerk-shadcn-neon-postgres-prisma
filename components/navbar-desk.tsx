import React from 'react'
import Navlinks from '@/components/navlinks'

const NavbarDesk = async () => {

  return (
    <ul className="hidden md:flex flex-row items-center justify-center gap-4 font-bold">
      <Navlinks />
    </ul>
  )
}

export default NavbarDesk
