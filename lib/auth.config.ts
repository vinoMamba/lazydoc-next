import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig, User } from "next-auth"

export default {
  providers: [Credentials({
    name: "Credentials",
    async authorize(credentials) {
      return null
    }
  })],
} satisfies NextAuthConfig
