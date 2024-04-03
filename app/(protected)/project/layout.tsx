import { ProjectNav } from "@/components/project/nav-bar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProjectNav />
      <div className="h-screen max-w-screen-lg mx-auto">
        {children}
      </div>
    </>
  );
}
