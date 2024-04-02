import { EmptyProject } from "@/components/project/empty-project";
import { ProjectCard } from "@/components/project/project-card";
import { getMyProjects } from "@/data/project";

export default async function ProjectPage() {
  const projectList = await getMyProjects()
  if (projectList.length === 0) {
    return (
      <EmptyProject />
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
      {
        projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      }
    </div>
  )
}
