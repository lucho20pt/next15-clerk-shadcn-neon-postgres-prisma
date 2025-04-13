import React from 'react'
import Unauthenticated from '@/components/user/unauthenticated'
import Authenticated from '@/components/user/authenticated'
import { auth } from '@clerk/nextjs/server'

interface UserPanelProps {
  className?: string
}
const UserPanel: React.FC<UserPanelProps> = async ({ className }) => {
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

export default UserPanel
