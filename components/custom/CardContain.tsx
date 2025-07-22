import CardGlossy from "./cardGlosy";
import Image from "next/image";

interface CardContentProps {
  name: string;
  image: string;
  quote: string;
}

const CardContain = ({name, image, quote}: CardContentProps) => {
  return (
    <CardGlossy>
      <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <div className="w-[120px] h-[120px] rounded-xl overflow-hidden">
          <Image src={image} alt={name} width={120} height={120} className="object-cover w-full h-full" />
        </div>

        <p className="text-sm italic text-gray-700 leading-relaxed text-center">{quote}</p>
      </div>
    </CardGlossy>
  )
}

export default CardContain