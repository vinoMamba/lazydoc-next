import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export  function HomeNav() {
  return (
    <div className=" flex items-center gap-6">
      <Logo />
      <nav className=" flex items-center">
        <Button variant="link">Features</Button>
        <Button variant="link">Documentation</Button>
        <Button variant="link">About</Button>
      </nav>
    </div>
  )
}
