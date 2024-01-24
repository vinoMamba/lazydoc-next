import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = {
          username: 'Test User',
          email: email,
          password,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
})
