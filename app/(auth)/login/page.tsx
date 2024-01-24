import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/app/auth";
import Link from "next/link";

export default function Login() {

  const handleSubmit = async (data: FormData) => {
    'use server'
    await signIn("credentials",{
      redirectTo: "/dashboard",
      email: data.get('email') as string,
      password: data.get('password') as string,
    })
  }
  return (
    <Card className=" w-[350px]">
      <CardHeader>
        <h1>Login</h1>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className=" grid w-full gap-4 items-center">
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Input your email" />
            </div>
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Input your password" />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className=" w-full">Login</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
      </CardFooter>
    </Card>
  )
}
