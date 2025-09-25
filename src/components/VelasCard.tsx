"use client";
import Image from "next/image";

interface VelaCardProps {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  telefono: string;
}

export default function VelaCard({
  nombre,
  descripcion,
  precio,
  imagen,
  telefono,
}: VelaCardProps) {
  return (
    <div
      className="
        bg-white rounded-xl shadow-lg overflow-hidden
        hover:shadow-2xl transition
        hover:bg-[#fdf5f8] active:bg-[#f7e9f1]   /* feedback en hover y touch */
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="
            object-cover object-center
            transition-transform duration-500 ease-in-out
            group-hover:scale-110 hover:scale-110   /* 🔥 zoom suave */
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#8A5F79]">{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <p className="text-md font-bold text-[#B886A3] mt-2">{precio}</p>
        <a
          href={`https://wa.me/${telefono}?text=Hola!%20Quiero%20más%20info%20sobre%20${encodeURIComponent(
            nombre
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-3 px-4 py-2 bg-[#B886A3] text-white rounded-lg
            hover:bg-[#9c7090] active:bg-[#7f5a73] transition
          "
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
