import Link from "next/link";
import { getPathwayBySlug, getProfessionSlugs } from "@/lib/data";
import { Pathway } from "../../../types";
import DreamPathwayClient from "./DreamPathwayClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This function tells Next.js which slugs to pre-build
export async function generateStaticParams() {
  const slugs = await getProfessionSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function DreamPage(props: PageProps) {
  const { slug } = await props.params;

  const pathway: Pathway | null = await getPathwayBySlug(slug);

  if (!pathway) {
    return (
      <div className="text-center py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Peta Impian Belum Tersedia
        </h2>
        <p className="text-gray-600 mb-8">
          Kami sedang bekerja keras untuk menambahkan jalur impian ini.
        </p>
        <Link
          href="/"
          className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return <DreamPathwayClient pathway={pathway} />;
}
