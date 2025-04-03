import React from 'react'
import Unauthenticated from '@/components/unauthenticated'
import Authenticated from '@/components/authenticated'
import { auth } from '@clerk/nextjs/server'

interface SidebarProps {
  className?: string
}
const Sidebar: React.FC<SidebarProps> = async ({ className }) => {
  const { userId } = await auth()

  if (!userId) {
    return <Unauthenticated />
  }

  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-4`}
    >
      <Authenticated userId={userId} />
    </div>
  )
}

export default Sidebar
