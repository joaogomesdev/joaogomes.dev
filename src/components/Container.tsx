// components/layout.js
import { useTheme } from "next-themes"
import React from "react"
import { NavItem } from "./NavLink"
import { HiMoon, HiSun } from 'react-icons/hi';

interface ContainerProps {
  children: React.ReactNode
} 

const Container = ({ children }: ContainerProps) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);


  return (
      <div className="transition-all font-Poppins w-screen flex flex-col items-center text-gray-900 dark:text-zinc-50 bg-gray-50 dark:bg-zinc-900">
        <div className="w-full min-h-screen max-w-4xl mx-auto">
          <header className="mt-14 flex justify-between items-center">
            <nav className="flex gap-10">
              <NavItem href="/" text="Home" />
              <NavItem href="/dashboard" text="Dashboard" />
              <NavItem href="/guestbook" text="Guestbook" />
              <NavItem href="/loves" text="Passions" />
              <NavItem href="/me" text="Me" />
            </nav>

            <button aria-label="Toggle Dark Mode" type="button" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && (
              resolvedTheme === 'dark' ? (
                <HiSun size="28" className="text-zinc-200 hover:text-orange-300"/>
              ) : (
                <HiMoon size="28" className="text-zinc-200 hover:text-gray-500"/>
              )
            )}  
              <span className="sr-only">Sun</span>
            </button>
          </header>
          
          <main className="mt-14">
            {children}
          </main>
        </div>
      </div>
  )
}

export { Container }
export type { ContainerProps }
