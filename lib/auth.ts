import NextAuth, { DefaultSession, NextAuthConfig, User } from "next-auth";
import { DefaultJWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials';

interface CustomSession extends DefaultSession {
  token: string;
}

interface CustomUser extends User {
  token: string;
}
interface CustomJwt extends DefaultJWT {
  token: string;
}


const authConfig: NextAuthConfig = {
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
        return user as CustomUser
      },
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt(j) {
      if (j.user) {
        j.token.token = (j.user as CustomUser).token
      }
      return j.token;
    },
    async session(s) {
      const { session, token } = s as unknown as { session: CustomSession, token: CustomJwt }
      session.token = token.token
      return session
    }
  }
}


export const { handlers, auth: au, signIn, signOut } = NextAuth(authConfig)


// Type fix
export const auth = async () => await au() as unknown as CustomSession | null
