import { ProjectNav } from "@/components/project/nav-bar";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProjectNav />
      <main className="pt-20 pb-20 h-full px-4 md:px-0">
        {children}
      </main>
    </>
  );
}
