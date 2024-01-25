import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className=" space-y-6 pb-8 pt-6 lg:py-32">
        <div className=" container max-w-[64rem] flex flex-col gap-4 items-center text-center">
          <Link
            href=""
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on GitHub
          </Link>
          <h1 className=" text-6xl font-bold">
            Lazy Doc. An interface documentation app built using Next.js.
          </h1>
          <div className="space-x-4 my-8">
            <Button asChild size="lg">
              <Link href="/login">
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
