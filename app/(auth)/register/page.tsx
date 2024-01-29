import { RegisterForm } from "@/components/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Register() {
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
          <RegisterForm />
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
