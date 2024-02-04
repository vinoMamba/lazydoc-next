import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="container h-screen flex items-center justify-center">
      <Button asChild variant="ghost" className=" absolute top-4 left-4">
        <Link href="/">
          <ArrowLeft />
          <span className=" ml-2">Back</span>
        </Link>
      </Button>
      <Card className=" w-[350px]">
        <CardHeader>
          <h1>Sign In</h1>
        </CardHeader>
        <CardContent>
          <LoginForm />
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
    </div>
  )
}
