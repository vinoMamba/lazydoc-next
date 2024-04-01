"use server"
import { z } from "zod";
import { RegisterSchema } from "./schema";
import { createUser, getUserByEmail } from "@/data/user";
import { Action } from "@/types/action";
import { crypto } from "@/lib/crypto";

export const registerAction: Action<z.infer<typeof RegisterSchema>> = async (values) => {
  const validateValues = RegisterSchema.safeParse(values);
  if (!validateValues.success) {
    return {
      error: "Invalid data"
    }
  }
  const { email, password, name } = validateValues.data
  const hashedPassword = crypto.encryptByAES(password)
  try {
    const user = await getUserByEmail(email);
    if (user) {
      return {
        error: "User already exists"
      }
    }
    await createUser(name, email, hashedPassword)
    return {
      data: null
    }
  } catch (error) {
    return {
      error: "Something went wrong. Please try again later."
    }
  }
}
