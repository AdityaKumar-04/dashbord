'use client'
import React, { useState } from 'react'
import { Nav } from './ui/nav'
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react"
import { Button } from './ui/button'
import { useWindowWidth } from '@react-hook/window-size'

export default function Sidebar() {

  const [isCollapsed, setisCollapsed] = useState(false)
  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;
  function toggleSidebar() {
    setisCollapsed(!isCollapsed)
  }
  return (
    <div className={`relative  'min-w-[50px]' border-r px-3 pb-10 pt-24 transition-all`}>
      {!isMobile && (
        <div className="absolute right-[10px] top-7">
          <Button variant='ghost' className='p-1 transition-all duration-1000 bg-zinc-900 text-white ' onClick={toggleSidebar}>
            {isCollapsed === true ? <ChevronRight /> : <ChevronLeft />}

          </Button>
        </div>
      )}


      <Nav
        isCollapsed={isMobile ? true: isCollapsed}
        links={[
          {
            title: "Dashbord ",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "User",
            href: "/Users",
            icon: User,
            variant: "ghost",
          },
          {
            title: "Shoping Cart",
            href: "/Shoping",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/Setting",
            icon: Settings,
            variant: "ghost",
          },

        ]}
      />
      {/* <Separator /> */}

    </div>
  )
}
