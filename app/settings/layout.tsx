import { SettingsNav } from "@/components/settings-nav";

type Props = {
  children: React.ReactNode;
}

export default function Settingsyout({ children }: Props) {
  return (
    <div className="container space-y-6 p-10 pb-16">
      <header className="bg-background z-40">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings .
          </p>
        </div>
      </header>
      <main className="flex-1 flex space-x-12 space-y-0">
        <SettingsNav className="-mx-4 w-1/5" />
        <div className=" flex-1">
        {children}
        </div>
      </main>
    </div>
  )
}

