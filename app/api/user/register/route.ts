import { db } from "@/lib/db"
import { registerSchema } from "@/lib/validators/user"
import { z } from "zod"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = registerSchema.parse(json)
    const u = await db.user.findUnique({ where: { email: body.email } })
    if (u) {
      return new Response(
        null,
        { status: 400, statusText: 'Email already exists' }
      )
    }
    const newU = await db.user.create({
      data: {
        email: body.email,
        username: body.email,
        password: body.password
      }
    })
    return new Response(JSON.stringify(newU))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(null, { status: 422, statusText: JSON.stringify(error.issues) })
    }
    return new Response(null, { status: 500 })
  }
}
