"use server"

import { Action } from "@/types/action"
import { z } from "zod"
import { LoginSchema } from "./schema"
import { signIn } from "@/lib/auth"
import { DEFAULT_REDIRECT } from "@/config/routes"
import { AuthError } from "next-auth"

export const loginAction: Action<z.infer<typeof LoginSchema>> = async (values) => {
  const validateValues = LoginSchema.safeParse(values)
  if (!validateValues.success) {
    return {
      error: "Invalid email or password. Please try again.",
    }
  }
  const { email, password } = validateValues.data
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT
    })
    return {
      data: null
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials!",
          }
        default:
          return {
            error: "Something went wrong!",
          }
      }
    }
    throw error
  }
}
