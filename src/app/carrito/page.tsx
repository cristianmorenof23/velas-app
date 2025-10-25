"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart.store";
import { FiTrash2, FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function CarritoPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, getTotalPrice } =
    useCartStore();

  if (cart.length === 0)
    return (
      <div className="pt-32 flex flex-col items-center justify-center px-6 text-center fadeIn animate-fadeIn mb-40 mt-12">

        {/* Icono grande carrito */}
        <div className="text-[#8A5F79] mb-4">
          <FiShoppingCart size={80} className="mx-auto animate-pulse" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#8A5F79]">
          ¡Tu carrito está vacío!
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#8A5F79] opacity-80 max-w-xs">
          Agregá productos desde el catálogo 💜<br />
          ¡Llevate algo lindo hoy!
        </p>

        {/* Botón CTA */}
        <Link
          href="/catalogo"
          className="
          mt-6 px-6 py-3
          bg-[#8A5F79] text-white rounded-full
          text-sm sm:text-base font-semibold
          hover:bg-[#734C63] transition
          shadow-md hover:shadow-lg
        "
        >
          Ver Catálogo
        </Link>
      </div>
    );


  return (
    <div className="pt-32 max-w-4xl mx-auto px-3 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#8A5F79] mb-8 text-center sm:text-left">
        Carrito de Compras 🛍️
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.nombre}
            className="
              flex flex-col sm:flex-row
              items-center sm:justify-between
              bg-white shadow-md rounded-lg
              p-4 gap-4
            "
          >
            {/* Imagen */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.imagen}
                alt={item.nombre}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Nombre y precio */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-[#8A5F79] text-sm sm:text-base">
                {item.nombre}
              </h3>
              <p className="font-bold text-[#B886A3] text-base sm:text-lg">
                ${item.precio * item.cantidad}
              </p>
            </div>

            {/* Botones cantidad */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.nombre)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                <FiMinus />
              </button>
              <span className="px-3 font-bold">{item.cantidad}</span>
              <button
                onClick={() => increaseQty(item.nombre)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                <FiPlus />
              </button>
            </div>

            {/* Eliminar */}
            <button
              onClick={() => removeFromCart(item.nombre)}
              className="text-red-500 hover:text-red-700"
            >
              <FiTrash2 size={22} />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-right mt-8 mb-32">
        <h3 className="text-xl sm:text-2xl font-bold text-[#8A5F79]">
          Total: ${getTotalPrice()}
        </h3>

        <Link
          href="/checkout"
          className="
            inline-block mt-5
            bg-[#8A5F79] text-white px-8 py-3
            rounded-lg hover:bg-[#734C63] transition
            text-base sm:text-lg
          "
        >
          Finalizar Pedido ✅
        </Link>
      </div>
    </div>
  );
}
