import UserPanel from '@/components/user/user-panel'

interface SidebarProps {
  className?: string
}
const Sidebar: React.FC<SidebarProps> = async ({ className }) => {
  return (
    <aside
      className={`${className} flex flex-col items-center justify-center gap-4`}
    >
      <UserPanel />
    </aside>
  )
}

export default Sidebar
