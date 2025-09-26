"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Icono WhatsApp

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
        hover:shadow-2xl transition transform hover:-translate-y-1
        w-full max-w-sm mx-auto   /* ✅ más ancho y centrado */
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
            hover:scale-110   /* 🔥 zoom suave */
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-[#8A5F79]">{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <p className="text-lg font-bold text-[#B886A3] mt-2">{precio}</p>

        {/* Botón WhatsApp */}
        <a
          href={`https://wa.me/${telefono}?text=Hola!%20Quiero%20más%20info%20sobre%20${encodeURIComponent(
            nombre
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 mt-4 px-5 py-2.5 
            bg-green-500 text-white font-medium rounded-lg 
            hover:bg-green-600 active:bg-green-700 transition
          "
        >
          <FaWhatsapp className="w-5 h-5" />
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
