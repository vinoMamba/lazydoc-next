"use client"

import { ClipboardPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectForm } from "./project-form"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"

export const AddProjectButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button className="flex items-center gap-x-1" onClick={() => setOpen(true)}>
        <ClipboardPlus className=" w-[1.2rem] h-[1.2rem]" />
        Add project
      </Button>
      <Dialog open={open} onOpenChange={() => setOpen((o) => !o)}>
        <DialogContent className="w-[480px]">
          <DialogHeader>
            Add project
          </DialogHeader>
          <ProjectForm onFinish={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
