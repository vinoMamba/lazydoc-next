"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const userSchema = z.object({
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
})

type Props = {
  defaultValues: z.infer<typeof userSchema> | undefined
}

export function UserForm({ defaultValues }: Props) {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues,
  })
  const onSubmit = form.handleSubmit((values: z.infer<typeof userSchema>) => {
    console.log(values)
  })
  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Input your username" />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Input your email" />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
