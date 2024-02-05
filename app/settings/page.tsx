import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { UserForm } from "@/components/user-form"
import { auth } from "@/lib/auth"
import { getFirstLetter } from "@/lib/utils"


export default async function Settings() {
  const s = await auth()
  return (
    <div className=" space-y-8">
      <div className="flex items-center gap-4" >
        <Avatar className="cursor-pointer w-16 h-16 ">
          <AvatarImage src={s?.info.avatar} alt="User" />
          <AvatarFallback>{getFirstLetter(s?.info.username)}</AvatarFallback>
        </Avatar>
        <div className=" flex flex-col space-y-1">
          <span className=" text- font-medium leading-none">{s?.info.username}</span>
          <span className=" text-md leading-0 text-muted-foreground">{s?.info.email}</span>
        </div>
      </div>
      <Separator />
      <UserForm defaultValues={s?.info} />
    </div>
  )
}
