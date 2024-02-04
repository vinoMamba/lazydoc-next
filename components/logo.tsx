import { PenTool } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <span className=" flex items-center gap-2 ">
        <PenTool />
        <span className=" text-lg font-bold">Lazy Doc</span>
      </span>
    </Link>
  )
}
