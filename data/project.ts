import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const getMyProjects = async () => {
  const session = await auth()
  const projectList = await db.projectMember.findMany({
    where: { userId: session?.user?.id },
  })
  return Promise.all(projectList.map(async (p) => {
    const project = await db.project.findUnique({
      where: { id: p.projectId }
    })
    return {
      ...project,
      perm: p.perm
    } as Project & { perm: number }
  }))
}

export const createProject = async (createdBy: string, projectName: string, description?: string) => {
  return db.$transaction(async (tx) => {
    const p = await tx.project.create({
      data: {
        projectName,
        description,
        createdBy,
        updatedBy: createdBy
      }
    })
    await tx.projectMember.create({
      data: {
        userId: createdBy,
        projectId: p.id,
        perm: 0,
        createdBy,
        updatedBy: createdBy
      }
    })
    return p
  })
}


export const updateProject = async (id: string, updatedBy: string, projectName: string, description?: string) => {
  return db.project.update({
    where: { id },
    data: {
      projectName,
      description,
      updatedBy
    }
  })
}

export const deleteProject = async (id: string) => {
  return db.$transaction(async (tx) => {
    const p = await tx.project.update({
      where: { id },
      data: {
        isDeleted: true,
      }
    })
    await tx.projectMember.updateMany({
      where: {
        projectId: id
      },
      data: {
        isDeleted: true
      }
    })
    return p
  })
}

