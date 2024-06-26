import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div className=" h-full">
        {children}
      </div>
    </SessionProvider>
  );
}
