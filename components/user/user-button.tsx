"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Settings2, User } from "lucide-react"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { UserItem } from "./user-item"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "@/components/auth/logout-button"
import Link from "next/link"

export const UserButton = () => {
  const user = useCurrentUser()
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <div className={
          buttonVariants({ variant: 'outline', size: 'icon' })
        }>
          {user?.image ?
            <Image src={user.image} alt="" /> :
            <User className="h-[1.2rem] w-[1.2rem]" />
          }
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuLabel>
          <UserItem user={user} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/settings">
            <DropdownMenuItem className="px-2 cursor-pointer">
              <Settings2 className="w-4 h-4" />
              <span className="ml-1">Settings</span>
            </DropdownMenuItem>
          </Link>
          <LogoutButton>
            <DropdownMenuItem className="px-2 cursor-pointer">
              <LogOut className="w-4 h-4" />
              <span className="ml-1">Logout</span>
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
