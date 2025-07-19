import { RegisterForm } from "@/components/RegisterForm"; // Import the new, dedicated component

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FAF8F4] p-4">
      <RegisterForm />
    </div>
  );
}
