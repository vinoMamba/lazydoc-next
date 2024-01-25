import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const handleSubmit = async () => {
    'use server'
    redirect('/login');
  }
  return (

    <div className="container h-screen flex items-center justify-center">
      <Button asChild variant="ghost" className=" absolute top-4 left-4">
        <Link href="/login">
          <ArrowLeft />
          <span className=" ml-2">Back</span>
        </Link>
      </Button>
      <Card className=" w-[350px]">
        <CardHeader>
          <h1>Sign Up</h1>
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
                <Button type="submit" className=" w-full">Sign Up</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
