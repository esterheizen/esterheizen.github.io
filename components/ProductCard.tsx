import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  images: string[];
  description?: string;
};

export default function ProductCard({ name, images, description }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      style={{ width: 300 }}
    >
      <div className="relative w-[300px] h-[300px] overflow-hidden rounded-md">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative w-[300px] h-[300px] flex-shrink-0">
              <Image
                src={src}
                alt={`${name} image ${i + 1}`}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-3 text-blue-900 font-semibold text-lg text-center">{name}</h3>
      {description && (
        <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
      )}
    </div>
  );
}
