"use client";
import CardContain from "@/components/custom/CardContain";
import CardKotak from "@/components/custom/cardKotak";
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
      <div className="flex gap-4 w-full min-h-60">
        <div className="flex justify-center items-center bg-blue-300 rounded-xl w-full">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            dolores ipsa tempora voluptatum qui quis magnam praesentium
            reiciendis necessitatibus nisi nobis labore placeat, nihil laborum
            explicabo nulla officia libero similique!
          </p>
        </div>

        <div className="flex items-center flex-col gap-4 w-6/12">
          <div className="bg-[#E0F15E] rounded-xl w-full h-full">
            <p>
              icikiwir
              <br />
              makan kebab
            </p>
          </div>
          <div className="bg-[#B09EEF] rounded-xl w-full h-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ex fuga impedit numquam praesentium odit qui odio aliquam iste!
              Quos dicta illo in, odit neque sit quia facere iure fugit?
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center bg-indigo-300 rounded-xl w-96">
          <p>
            Belajar dimana aja, <br /> anywhere with our <br /> online courses
          </p>
        </div>
      </div>

      <section className="flex items-center justify-center text-center py-20 gap-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
          Kembangkan
          <br />
          Kemampuan
        </h1>
        <p className="text-4xl md:text-base max-w-xl text-gray-600 text-left ">
          Temukan potensi dan rancang masa depanmu. <br />
          Jelajahi jalur pendidikan dan karir berdasarkan
          <br /> minat, usia, dan lokasi.
        </p>
        <Link
          href="/auth/register"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Gabung Sekarang
        </Link>
      </section>
      <div className="flex gap-4">
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
      </div>
      <div className="flex gap-4">
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
      </div>
      <div className="flex gap-4">
        <CardKotak title="Crotical Thinking"></CardKotak>{" "}
        <CardKotak title="Crotical Thinking"></CardKotak>
      </div>

      <div className="flex items-center justify-center text-center py-20 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
          Testimoni & Aspirasi lokal
        </h1>
      </div>
      <section className="flex items-center justify-center text-center gap-20">
        <div className="flex gap-10">
          <CardContain
            name="Mas Varis"
            image="/Images/jidan.png"
            quote='"blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu "'
          ></CardContain>
          <CardContain
            name="Mas Varis"
            image="/Images/jidan.png"
            quote='"blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu "'
          ></CardContain>
          <CardContain
            name="Mas Varis"
            image="/Images/jidan.png"
            quote='"blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu blblableble blublublu "'
          ></CardContain>
        </div>
      </section>
    </section>
  );
}
