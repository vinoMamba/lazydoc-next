import { PenTool } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export  function HomeNav() {
  return (
    <div className=" flex items-center gap-6">
      <Link href="/">
        <span className=" flex items-center gap-2 ">
          <PenTool />
          <span className=" text-lg font-bold">Lazy Doc</span>
        </span>
      </Link>
      <nav className=" flex items-center">
        <Button variant="link">Features</Button>
        <Button variant="link">Documentation</Button>
        <Button variant="link">About</Button>
      </nav>
    </div>
  )
}
