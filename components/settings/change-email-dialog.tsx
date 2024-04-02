"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ChangeEmailSchema } from "@/actions/settings/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "@/hooks/use-action"
import { changeEmailAction } from "@/actions/settings"
import { toast } from "sonner"
import { logout } from "@/actions/logout"
import { z } from "zod"
import { Input } from "@/components/ui/input"

type Props = {
  email: string
}
export const ChangeEmailDialog = ({ email }: Props) => {

  const form = useForm<z.infer<typeof ChangeEmailSchema>>({
    resolver: zodResolver(ChangeEmailSchema),
    defaultValues: {
      email: ""
    }
  })
  const { isPending, execute } = useAction<z.infer<typeof ChangeEmailSchema>, null>(changeEmailAction, {
    onError(error) {
      toast.error(error)
    },
    onSuccess() {
      toast.success("Email updated")
      logout()
    }
  })
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Change email</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className=" flex items-center gap-x-1">
            <span>Your current email is </span>
            <b> {email}</b>
            <span>.</span>
          </div>
        </DialogHeader>
        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            You will be logged out after changing your email.
          </AlertDescription>
        </Alert>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your password.</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter you new email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Change email
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
