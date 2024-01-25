import { HomeNav } from "@/components/home-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
}

export default function HomeLyout({ children }: Props) {
  return (
    <div className=" flex flex-col min-h-screen">
      <header className=" container bg-background z-40">
        <div className=" flex items-center h-20 justify-between">
          <HomeNav />
          <Button asChild variant="secondary">
            <Link href="/login">
              Sign In
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

