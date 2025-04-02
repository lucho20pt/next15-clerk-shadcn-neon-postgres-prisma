import React from 'react'
import Unauthenticated from '@/components/unauthenticated'
import Authenticated from '@/components/authenticated'
import { currentUser } from '@clerk/nextjs/server'

interface SidebarProps {
  className?: string
}
const Sidebar: React.FC<SidebarProps> = async ({ className }) => {
  const user = await currentUser()

  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-4`}
    >
      {!user ? <Unauthenticated /> : <Authenticated />}
    </div>
  )
}

export default Sidebar
