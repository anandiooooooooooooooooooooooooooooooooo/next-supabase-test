import { LoginForm } from "@/components/LoginForm"; // Import the new, dedicated component

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FAF8F4] p-4">
      <LoginForm />
    </div>
  );
}
