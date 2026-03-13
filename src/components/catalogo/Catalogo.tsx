"use client";

import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenes: string[];
  telefono: string;
}

export default function VelaCard({
  nombre,
  descripcion,
  precio,
  imagenes,
}: Props) {
  return (
    <div className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      border border-gray-100
    ">

      {/* Imagen */}
      <div className="relative h-64 w-full overflow-hidden">

        <Image
          src={imagenes[0]}
          alt={nombre}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Badge */}
        <span className="
          absolute top-3 left-3
          bg-white/90
          text-xs
          px-3 py-1
          rounded-full
          font-medium
          text-[#8A5F79]
          shadow
        ">
          Artesanal
        </span>

      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3">

        <h3 className="text-lg font-semibold text-[#5c3c4d]">
          {nombre}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {descripcion}
        </p>

        <div className="flex items-center justify-between mt-2">

          <span className="text-lg font-bold text-[#B886A3]">
            ${precio}
          </span>

          <button
            className="
              flex items-center gap-2
              bg-[#B886A3]
              text-white
              px-4 py-2
              rounded-lg
              text-sm
              hover:bg-[#9c7090]
              transition
            "
          >
            <FiShoppingCart size={16} />
            Comprar
          </button>

        </div>

      </div>
    </div>
  );
}