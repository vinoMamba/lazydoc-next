import { auth } from "@/lib/auth"

export default async function Workbench(){
  const s = await auth()
  return (
    <div>{JSON.stringify(s)}</div>
  )
}
