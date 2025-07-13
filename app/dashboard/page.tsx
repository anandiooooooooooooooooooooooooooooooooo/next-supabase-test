"use client";

import LogoutButton from "@/components/LogoutBtn";
import ProfileModal from "@/components/UserProfileForm";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        router.push("/login");
        return;
      }

      setUser(user);

      const { data: profile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!profile) {
        setShowProfileModal(true);
      }

      setLoading(false);
    };

    checkUser();
  }, [supabase, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome, {user.email}!</h1>
      <LogoutButton />

      {showProfileModal && user?.id && (
        <ProfileModal
          userId={user.id}
          onSuccess={() => setShowProfileModal(false)}
        />
      )}
    </div>
  );
}
