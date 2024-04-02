"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { AddOrEditProjectSchema } from "@/actions/add-project/schema"
import { addOrEditProjectAction } from "@/actions/add-project"
import useSWR from "swr"
import { useEffect } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


type Props = {
  projectId?: string
  onFinish?: () => void
}

export const ProjectForm = ({ projectId, onFinish }: Props) => {

  const { data } = useSWR(projectId ? `/api/project/${projectId}` : null, (url) => fetch(url).then((res) => res.json()))

  useEffect(() => {
    if (data) {
      form.setValue("projectName", data.projectName)
      form.setValue("description", data.description)
      form.setValue("id", data.id)
    }
  }, [data])

  const form = useForm<z.infer<typeof AddOrEditProjectSchema>>({
    resolver: zodResolver(AddOrEditProjectSchema),
    defaultValues: {
      projectName: "",
      description: "",
    }
  })

  const { isPending, execute } = useAction<
    z.infer<typeof AddOrEditProjectSchema>, null>(addOrEditProjectAction, {
      onError(error) {
        toast.error(error)
      },
      onSuccess() {
        toast.success(`${projectId ? "Updated" : "Added"} project successfully!`)
        !projectId && form.reset()
        onFinish?.()
      }
    })

  const onSubmit = form.handleSubmit((values) => {
    execute(values)
  })

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="space-y-6 px-4"
      >
        <FormField
          control={form.control}
          name="projectName"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter a new project name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description </FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter a description" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {projectId ? "Update" : "Add"} Project
        </Button>
      </form>
    </Form>
  )
}
