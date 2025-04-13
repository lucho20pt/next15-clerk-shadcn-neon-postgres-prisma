import React from 'react'
import Navlinks from '@/components/layout/navlinks'

const NavbarDesk = async () => {

  return (
    <ul className="hidden md:flex flex-row items-center justify-center gap-6 font-bold">
      <Navlinks />
    </ul>
  )
}

export default NavbarDesk
