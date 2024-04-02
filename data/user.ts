import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email
    }
  })
}

export async function getUserById(id: string) {
  return db.user.findUnique({
    where: {
      id
    }
  })
}


export async function createUser(name: string, email: string, password: string) {
  return db.user.create({
    data: {
      name,
      email,
      password
    }
  })
}
