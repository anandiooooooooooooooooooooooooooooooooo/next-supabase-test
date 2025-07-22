

interface CardKotakProps {
    title: string;
}

export default function CardKotak({title}: CardKotakProps) {
  return (
    <div className="w-full max-w-[120px] aspect-square bg-white border rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-2">
      <h3 className="text-base font-semibold">{title}</h3>
    </div>
  );
}