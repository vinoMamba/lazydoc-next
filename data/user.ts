import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email
    }
  })
}


export async function createUser(username: string, email: string, password: string) {
  return db.user.create({
    data: {
      username,
      email,
      password
    }
  })
}
