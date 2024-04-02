import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container flex justify-center  pt-20">
      <Button asChild variant="ghost" className=" absolute top-4 left-4">
        <Link href="/project">
          <ArrowLeft />
          <span className=" ml-2">Back</span>
        </Link>
      </Button>
      {children}
    </div>
  );
}
