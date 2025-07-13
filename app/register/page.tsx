"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard"); // or redirect to login
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-orange-500">
          Daftar Akun
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md transition"
        >
          {loading ? "Mendaftarkan..." : "Daftar"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Sudah punya akun?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login di sini
          </a>
        </p>
      </form>
    </div>
  );
}
