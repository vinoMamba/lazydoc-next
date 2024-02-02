"use client"
import type { FC } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from "next-auth/react"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).max(100, { message: 'Password must be at most 100 characters long' })
})

export const LoginForm: FC = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = form.handleSubmit(async (data: z.infer<typeof formSchema>) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if(res?.error){
      return toast.error("Login failed", {
        description: res.error,
      })
    }
    router.replace('/workbench')
    return toast.success("Login success")
  })

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Input your Email' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Input your password' type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=' w-full'>Sign In</Button>
      </form>
    </Form>
  )
}
