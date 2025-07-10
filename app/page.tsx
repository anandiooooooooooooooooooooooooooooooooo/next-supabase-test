import Link from "next/link";
import { getProfessions } from "@/lib/data";
import { Profession } from "@/types";

// --- Homepage Sections (as components) ---
const HeroSection = () => (
  <section className="container mx-auto px-6 pt-16 pb-12 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
      AI-Powered Learning <br /> for Tomorrow&apos;s Leaders
    </h1>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
      Empowering students with personalized, interactive learning designed to
      build essential skills for future success. This is your Dream Map.
    </p>
    <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300">
      Get Started
    </button>
  </section>
);

interface SkillsSectionProps {
  professions: Profession[];
}

const SkillsSection = ({ professions }: SkillsSectionProps) => (
  <section className="container mx-auto px-6 py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        Skills That Shape Tomorrow
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Explore the dream careers and the essential skills needed to succeed.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {professions.map((prof) => (
        <Link
          key={prof.id}
          href={`/dream/${prof.slug}`}
          className="relative rounded-2xl shadow-xl overflow-hidden h-96 group cursor-pointer"
        >
          <img
            src={prof.image_url}
            alt={prof.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-3xl font-bold text-white mb-2">{prof.name}</h3>
            <p className="text-white/90">{prof.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default async function HomePage() {
  const professions = await getProfessions();

  return (
    <>
      <HeroSection />
      <SkillsSection professions={professions} />
    </>
  );
}
