import { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const res = await fetch('http://127.0.0.1:3000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        })

        const user = await res.json()

        if (!res.ok) {
          return null
        }
        return user
      },
    })
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('authorized', auth, nextUrl)
      return true;
    },
  }
}
