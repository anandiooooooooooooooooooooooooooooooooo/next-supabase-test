import LogoutButton from "@/components/LogoutBtn"; // client component
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user.email}!</h1>
      <LogoutButton />
    </div>
  );
}
