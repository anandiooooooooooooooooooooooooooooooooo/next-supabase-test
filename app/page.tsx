"use client";
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
          href="/register"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Mulai Sekarang
        </Link>
        <Link
          href="/login"
          className="text-orange-500 hover:underline font-semibold"
        >
          Sudah punya akun?
        </Link>
      </div>
    </section>
  );
}
