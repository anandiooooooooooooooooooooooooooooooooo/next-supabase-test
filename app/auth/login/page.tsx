import { LoginForm } from "@/components/LoginForm"; // Import the new, dedicated component

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <LoginForm />
    </div>
  );
}
