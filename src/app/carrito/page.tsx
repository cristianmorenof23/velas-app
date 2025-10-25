"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart.store";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";

export default function CarritoPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, getTotalPrice } =
    useCartStore();

  if (cart.length === 0)
    return (
      <div className="pt-32 text-center text-[#8A5F79]">
        <h2 className="text-3xl font-bold">🛒 Tu carrito está vacío</h2>
        <p className="mt-3">Agregá productos desde el catálogo 💜</p>
        <Link
          href="/catalogo"
          className="mt-5 inline-block bg-[#8A5F79] text-white px-6 py-3 rounded-lg hover:bg-[#734C63] transition"
        >
          Ver Catálogo
        </Link>
      </div>
    );

  return (
    <div className="pt-32 max-w-4xl mx-auto px-4 mt-16">
      <h2 className="text-3xl font-bold text-[#8A5F79] mb-8">
        Carrito de Compras 🛍️
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.nombre}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Imagen */}
            <div className="relative w-20 h-20">
              <Image
                src={item.imagen}
                alt={item.nombre}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Nombre y precio */}
            <div className="flex-1 px-4">
              <h3 className="font-semibold text-[#8A5F79]">{item.nombre}</h3>
              <p className="font-bold text-[#B886A3]">
                ${item.precio * item.cantidad}
              </p>
            </div>

            {/* Botones cantidad */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.nombre)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition hover:cursor-pointer"
              >
                <FiMinus />
              </button>
              <span className="px-3 font-bold">{item.cantidad}</span>
              <button
                onClick={() => increaseQty(item.nombre)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition hover:cursor-pointer"
              >
                <FiPlus />
              </button>
            </div>

            {/* Eliminar */}
            <button
              onClick={() => removeFromCart(item.nombre)}
              className="text-red-500 hover:text-red-700 ml-4 hover:cursor-pointer"
            >
              <FiTrash2 size={22} />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-right mt-8">
        <h3 className="text-2xl font-bold text-[#8A5F79]">
          Total: ${getTotalPrice()}
        </h3>

        {/* Checkout por whatsapp */}
        <Link
          href="/checkout"
          className="inline-block mt-5 mb-40 bg-[#8A5F79] text-white px-8 py-3 rounded-lg hover:bg-[#734C63] transition text-lg"
        >
          Finalizar Pedido
        </Link>
      </div>
    </div>
  );
}
