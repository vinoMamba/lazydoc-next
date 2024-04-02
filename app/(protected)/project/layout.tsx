import { AddProjectButton } from "@/components/project/add-project-button";
import { ProjectNav } from "@/components/project/nav-bar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProjectNav />
      <main className="h-screen container relative">
        {/* <header className=" flex items-center gap-x-4 max-w-lg absolute top-20 z-100">
          <Input placeholder="Search projects..." />
          <AddProjectButton />
        </header> */}
        <ScrollArea className="h-full mt-20">
          {children}
        </ScrollArea>
      </main>
    </>
  );
}
