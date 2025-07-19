import { AuthForm } from "@/components/AuthForm"; // Adjust the import path if needed

export default function LoginPage() {
  return (
    // This outer div creates the centered layout for the form.
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FAF8F4] p-4">
      {/*
        We render the AuthForm component and explicitly tell it to be in "login" mode.
      */}
      <AuthForm variant="login" />
    </div>
  );
}
