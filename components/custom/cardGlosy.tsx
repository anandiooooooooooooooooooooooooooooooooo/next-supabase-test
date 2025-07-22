import { ReactNode } from "react";

interface CardGlossyProps {
    children?: ReactNode;
}


export default function CardGlossy({children}: CardGlossyProps) {
  return (
    <div className="w-full max-w-[280px] rounded-2xl relative overflow-hidden shadow-lg">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-white" />

      {/* Glossy Curve */}
      <div className="absolute -top-[60%] -left-[60%] w-[200%] h-[200%] bg-white/40 rounded-full blur-2xl" />

{/* Curve glossy di pojok kanan atas */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-bl-[100%] bg-gradient-to-bl from-blue-500 via-blue-300 to-transparent" />

      {/* (Opsional) Konten di dalam card */}
      <div className="relative z-10 flex items-end justify-center h-full pb-4">
        {children}
      </div>
    </div>
  );
}