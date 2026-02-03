import AuthLayout from '@/components/AuthLayout/AuthLayout';
import AuthForm from '@/components/Auth/AuthForm';
import bgImage from '@/assets/images/register-page/register-hero.png'; 

export default function RegisterPage() {
  return (
    <AuthLayout 
      imageSrc={bgImage} 
    >
      <AuthForm initialView="register" />
    </AuthLayout>
  );
}