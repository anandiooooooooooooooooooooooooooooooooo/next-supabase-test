"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

interface ProfileModalProps {
  userId: string;
  onSuccess: () => void;
}

export default function ProfileModal({ onSuccess }: ProfileModalProps) {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [minat, setMinat] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [citaCita, setCitaCita] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("user").insert({
      name,
      age: Number(age),
      email: "testing@gmail.com",
      password: "password",
      minat,
      lokasi,
      cita_cita: citaCita,
    });

    if (!error) {
      onSuccess();
    } else {
      alert("Gagal menyimpan profil: " + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Lengkapi Profilmu</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Usia"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Minat"
            value={minat}
            onChange={(e) => setMinat(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Lokasi"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Cita-cita"
            value={citaCita}
            onChange={(e) => setCitaCita(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Simpan Profil
          </button>
        </form>
      </div>
    </div>
  );
}
