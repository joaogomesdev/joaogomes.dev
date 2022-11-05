// components/layout.js
import { useTheme } from "next-themes";
import React from "react";
import { NavItem } from "./NavLink";
import { HiMoon, HiSun } from "react-icons/hi";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  return (
    <div className="font-Poppins flex w-screen flex-col items-center bg-gray-50 text-gray-900 transition-all dark:bg-zinc-900 dark:text-zinc-50">
      <div className="mx-auto min-h-screen w-full max-w-4xl px-8 lg:px-0">
        <header className="w-full mt-14 flex items-center justify-between">
          <nav className="flex  gap-10 flex-col sm:flex-row">
            <NavItem href="/" text="Home" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/passions" text="Passions" />
            <NavItem href="/me" text="Me" />
          </nav>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted &&
              (resolvedTheme === "dark" ? (
                <HiSun
                  size="28"
                  className="text-orange-300 hover:text-orange-400"
                />
              ) : (
                <HiMoon
                  size="28"
                  className="text-zinc-400 hover:text-gray-500"
                />
              ))}
            <span className="sr-only">Sun</span>
          </button>
        </header>

        <main className="mt-14">{children}</main>

        <footer className="p-20"></footer>
      </div>
    </div>
  );
};

export { Container };
export type { ContainerProps };
