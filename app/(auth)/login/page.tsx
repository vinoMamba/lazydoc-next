import { LoginForm } from "@/components/auth/login-form";
import { PageWrapper } from "@/components/auth/page-wrapper";

export default function LoginPage(){
  return (
    <PageWrapper backHref="/">
      <LoginForm/>
    </PageWrapper>
  )
}
