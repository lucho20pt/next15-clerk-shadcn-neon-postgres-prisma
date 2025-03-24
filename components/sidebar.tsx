import React from 'react'
import Unauthenticated from '@/components/unauthenticated'
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
      {!user ? <Unauthenticated /> : <p>user</p>}
    </div>
  )
}

export default Sidebar
