import { PageWrapper } from "@/components/auth/page-wrapper";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <PageWrapper backHref="/login">
      <RegisterForm />
    </PageWrapper>
  )
}
