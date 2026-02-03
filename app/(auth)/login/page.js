import AuthLayout from '@/components/AuthLayout/AuthLayout';
import AuthForm from '@/components/Auth/AuthForm';
import loginBgImage from '@/assets/images/login-page/login-hero.png'; 

export default function LoginPage() {
  return (
    <AuthLayout 
      imageSrc={loginBgImage} 
    >
      <AuthForm initialView="login" />
    </AuthLayout>
  );
}