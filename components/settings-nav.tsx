"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { usePathname } from "next/navigation"

export function SettingsNav({ className }: { className?: string }) {
  const navItems = [
    { title: 'Profile', href: '/settings' },
    { title: 'About', href: '/settings/about' },
  ]
  const pathname = usePathname()
  return (
    <nav className={cn(
      "flex flex-col space-x-0 space-y-1",
      className
    )} >
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={
            cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}
        >{item.title}</Link>
      ))}
    </nav>
  )
}
