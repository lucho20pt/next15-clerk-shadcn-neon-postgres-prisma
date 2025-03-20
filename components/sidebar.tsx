import React from 'react'

interface SidebarProps {
  className?: string
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center gap-4`}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ab
        odio. Voluptatibus, officiis totam qui quia inventore quisquam quae
        dicta?
      </p>
      <ul className='flex flex-col list-disc'>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </div>
  )
}

export default Sidebar
