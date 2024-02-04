import { Logo } from "@/components/logo";
import { WorkbenchNav } from "@/components/workbench-nav";

type Props = {
  children: React.ReactNode;
}

export default function HomeLyout({ children }: Props) {
  return (
    <div className=" flex flex-col min-h-screen max-w-screen overflow-hidden">
      <header className=" container bg-background z-40">
        <div className="flex items-center h-20 justify-between">
          <Logo />
          <WorkbenchNav />
        </div>
      </header>
      <main className="flex-1 border-t">{children}</main>
    </div>
  )
}

