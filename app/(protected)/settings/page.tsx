import { ChangeEmailDialog } from "@/components/settings/change-email-dialog";
import { ChangePasswordDialog } from "@/components/settings/change-password-dialog";
import { SetterItem } from "@/components/settings/setter-item";
import { SubTitle } from "@/components/settings/sub-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { getFirstLetter } from "@/lib/shared";

export default async function SettingsPage() {
  const session = await auth()
  return (
    <Card className="bg-muted/40 container">
      <CardHeader>
        <CardTitle>
          Settings
        </CardTitle>
        <CardDescription>
          Manage your account settings and set e-mail preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-4">
          <SubTitle title="My profile" />
          <div className=" flex flex-col  gap-y-2">
            <Avatar className=" h-16 w-16">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {getFirstLetter(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline">Add photo</Button>
          </div>
          <SubTitle title="Account security" />
          <div className="flex flex-col gap-y-2">
            <SetterItem title="Email" subTitle={session?.user?.email}>
              <ChangeEmailDialog email={session?.user?.email || ""} />
            </SetterItem>
            <SetterItem title="Password" subTitle="Set a permanent password to login to your account.">
              <ChangePasswordDialog />
            </SetterItem>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
