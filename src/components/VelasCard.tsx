"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useCartStore } from "@/store/cart.store";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";


interface VelaCardProps {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[];
  telefono: string;
}

export default function VelaCard({
  nombre,
  descripcion,
  precio,
  imagenes = [],
  telefono,
}: VelaCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const precioNum = Number(precio.replace("$", "").trim());

  const handleAddCart = () => {
    addToCart({
      nombre,
      precio: precioNum,
      imagen: imagenes[0],
      cantidad: qty,
    });

    toast.success("Producto agregado al carrito 🕯️");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 w-full max-w-sm mx-auto">

      {/* Slider */}
      <div className="relative w-full h-72 sm:h-80 md:h-96">
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop className="h-full">
          {imagenes.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt={`${nombre} ${index}`} fill className="object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-[#8A5F79]">{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <p className="text-lg font-bold text-[#B886A3] mt-2">{precio}</p>

        {/* Selector cantidad */}
        <div className="flex items-center justify-center gap-4 my-3">
          <button
            onClick={() => qty > 1 && setQty(qty - 1)}
            className="p-2 hover:cursor-pointer  bg-gray-200 rounded hover:bg-gray-300"
          >
            <FiMinus />
          </button>
          <span className="text-xl font-bold">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="p-2 hover:cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
          >
            <FiPlus />
          </button>
        </div>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${telefono}?text=${encodeURIComponent(
            `¡Hola! Quiero más información sobre esta vela:\n${nombre}`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          <FaWhatsapp className="w-5 h-5" /> Consultar
        </Link>

        {/* Carrito */}
        <button
          onClick={handleAddCart}
          className="w-full inline-flex items-center hover:cursor-pointer justify-center gap-2 mt-3 bg-[#8A5F79] text-white py-2 rounded-lg hover:bg-[#734C63]"
        >
          <FiShoppingCart className="w-5 h-5" />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
