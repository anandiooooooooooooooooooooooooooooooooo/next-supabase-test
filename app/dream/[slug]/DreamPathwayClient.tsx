"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Pathway, Skill } from "@/types";

// --- Sub-Component: SkillIcon ---
interface SkillIconProps {
  skill: Skill;
  onClick: (skill: Skill) => void;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, onClick }) => (
  <button
    onClick={() => onClick(skill)}
    className="bg-orange-100 hover:bg-orange-200 p-4 rounded-xl flex flex-col items-center shadow transition"
  >
    <div className="text-2xl mb-1">
      {/* Use real icon here if available */}
      🧠
    </div>
    <span className="text-sm font-medium text-gray-800 text-center">
      {skill.name}
    </span>
  </button>
);

// --- Sub-Component: SkillModal ---
interface SkillModalProps {
  skill: Skill | null;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{skill.name}</h2>
        <p className="text-gray-600">{skill.description}</p>
      </div>
    </div>
  );
};

// --- Main Component ---
interface DreamPathwayClientProps {
  pathway: Pathway;
}

export default function DreamPathwayClient({
  pathway,
}: DreamPathwayClientProps) {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <>
      <main className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mb-8 text-orange-600 font-semibold flex items-center space-x-2 hover:text-orange-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Kembali ke Semua Profesi</span>
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">
            {pathway.profession.name}
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            {pathway.profession.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Jalur Impian 🗺️
            </h2>
            <div className="relative border-l-4 border-orange-200 pl-8 space-y-12">
              {pathway.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 -top-1 w-6 h-6 bg-white border-4 border-orange-500 rounded-full" />
                  <span className="bg-orange-100 text-orange-800 text-sm font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    {step.education_level}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills + Inspiration */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Keterampilan Pahlawan 💪
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {pathway.skills.map((skill) => (
                  <SkillIcon
                    key={skill.id}
                    skill={skill}
                    onClick={setSelectedSkill}
                  />
                ))}
              </div>
            </div>

            {/* Local Inspiration */}
            {pathway.inspiration && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Inspirasi Lokal ✨
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <img
                    src={pathway.inspiration.photo_url}
                    alt={pathway.inspiration.name || "Inspirasi"}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {pathway.inspiration.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {`"${pathway.inspiration.story}"`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </>
  );
}
