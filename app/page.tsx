"use client";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
        Jalur Mimpi
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-600">
        Temukan potensi dan rancang masa depanmu. Jelajahi jalur pendidikan dan
        karir berdasarkan minat, usia, dan lokasi.
      </p>
      <div className="space-x-4">
        <Link
          href="/auth/register"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Mulai Sekarang
        </Link>
        <Link
          href="/auth/login"
          className="text-orange-500 hover:underline font-semibold"
        >
          Sudah punya akun?
        </Link>
      </div>
      <div className="flex space-x-4  > *">
        <div className="flex items-center">
          <p>Learn anytime, <br/> anywhere with our <br/> online courses</p>
        </div>
        <div className="space-y-4 justify-center">
          <div className="bg-[#E0F15E] rounded-xl"><p>icikiwir<br/>makan kebab</p></div>
          <div className="bg-[#B09EEF] rounded-xl"><p>Lblabla, <br/> anywhere with our <br/> online courses</p></div>
        </div>
        <div className="flex items-center">
          <p>Belajar dimana aja, <br/> anywhere with our <br/> online courses</p>
        </div>
      </div>
    </section>
  );
}
