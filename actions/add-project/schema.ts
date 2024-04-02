import { z } from "zod";

export const AddOrEditProjectSchema = z.object({
  id: z.string().optional(),
  projectName: z.string()
    .min(1, "Project name is required")
    .max(30, "Project name must be at most 30 characters long"),
  description: z.string()
    .max(50, "Description must be at most 50 characters long")
    .optional(),
})
