import { RegisterForm } from "@/components/RegisterForm"; // Import the new, dedicated component

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <RegisterForm />
    </div>
  );
}
