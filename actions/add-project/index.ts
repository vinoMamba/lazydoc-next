"use server"
import { Action } from "@/types/action";
import { AddOrEditProjectSchema } from "./schema";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createProject, updateProject } from "@/data/project";

export const addOrEditProjectAction: Action<z.infer<typeof AddOrEditProjectSchema>, null> = async (values) => {
  const validateValues = AddOrEditProjectSchema.safeParse(values)
  if (!validateValues.success) {
    return {
      error: "Invalid input. Please try again."
    }
  }
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        error: "You are not logged in. Please log in and try again."
      }
    }
    const { id, projectName, description } = validateValues.data

    if (id) {
      await updateProject(id, session.user.id, projectName, description)
      revalidatePath("/project")
      return {
        data: null
      }
    } else {
      await createProject(session.user.id, projectName, description)
      revalidatePath("/project")
      return {
        data: null
      }
    }
  } catch (error) {
    console.error(error)
    return {
      error: "Something went wrong. Please try again."
    }
  }
}
