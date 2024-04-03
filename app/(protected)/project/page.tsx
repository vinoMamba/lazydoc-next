import { AddProjectButton } from "@/components/project/add-project-button";
import { EmptyProject } from "@/components/project/empty-project";
import { ProjectCard } from "@/components/project/project-card";
import { Input } from "@/components/ui/input";
import { getMyProjects } from "@/data/project";

export default async function ProjectPage() {
  const projectList = await getMyProjects()
  if (projectList.length === 0) {
    return (
      <EmptyProject />
    )
  }
  return (
    <div className="pt-20 flex flex-col h-full">
      <header className="flex items-center gap-x-2 px-4">
        <Input placeholder="Search projects..." />
        <AddProjectButton />
      </header>
      <div className="h-full w-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {
          projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  )
}
