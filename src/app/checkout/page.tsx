"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart.store";
import { SiMercadopago } from "react-icons/si";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="pt-32 text-center text-[#8A5F79] px-4">
        <h2 className="text-3xl font-bold">No hay productos para finalizar 😅</h2>
        <Link
          href="/catalogo"
          className="mt-5 inline-block bg-[#8A5F79] text-white px-6 py-3 rounded-lg hover:bg-[#734C63] transition"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  const total = getTotalPrice();

  const message = encodeURIComponent(
    `¡Hola Yani!  Quiero hacer este pedido:\n\n` +
      cart
        .map(
          (item) =>
            ` ${item.nombre}\nCantidad: ${item.cantidad}\nSubtotal: $${item.precio * item.cantidad}\n`
        )
        .join("\n") +
      `\n Total: $${total}\n\n¿Me confirmás disponibilidad y medios de pago?\n¡Gracias! `
  );

  const whatsappURL = `https://wa.me/3517376607?text=${message}`;

  const handleOrder = () => {
    clearCart();
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto px-3 sm:px-4 text-center">
      {/* TITULO */}
      <h2 className="text-3xl font-bold text-[#8A5F79]">Confirmar pedido 🛍️</h2>
      <p className="mt-2 text-[#8A5F79] text-sm sm:text-base">
        Revisá los detalles y enviá tu compra por WhatsApp 📲
      </p>

      {/* LISTA DE PRODUCTOS */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mt-6 text-left">
        {cart.map((item) => (
          <div
            key={item.nombre}
            className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-4 gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative min-w-[70px] min-h-[70px] rounded-md overflow-hidden shadow-sm">
                <Image src={item.imagen} alt={item.nombre} fill className="object-cover" />
              </div>

              <div className="text-left">
                <p className="font-semibold text-[#8A5F79] text-sm sm:text-base">
                  {item.nombre}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Cantidad: {item.cantidad}
                </p>
              </div>
            </div>

            {/* PRECIO */}
            <span className="font-bold text-[#B886A3] text-sm sm:text-lg w-full sm:w-auto text-right">
              ${item.precio * item.cantidad}
            </span>
          </div>
        ))}

        {/* TOTAL */}
        <div className="text-right text-[#8A5F79] text-xl sm:text-2xl font-bold mt-3">
          Total: ${total}
        </div>
      </div>

      {/* MÉTODOS DE PAGO */}
      <div className="mt-6 bg-gray-100 p-4 sm:p-5 rounded-lg text-left shadow">
        <h4 className="font-semibold text-[#8A5F79] mb-2">Medios de Pago:</h4>
        <ul className="space-y-2 text-sm">
          <li>💸 Transferencia Bancaria</li>
          <li className="flex items-center gap-2 font-semibold text-[#009EE3]">
            <SiMercadopago size={22} />
            Mercado Pago
          </li>
          <li className="flex items-center gap-3 font-semibold">
            <FaCcVisa size={26} className="text-[#1A1F71]" />
            <FaCcMastercard size={26} className="text-[#EB001B]" />
            Tarjetas
          </li>
        </ul>
      </div>

      {/* BTN: FINALIZAR */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOrder}
        className="
          inline-block mt-8 w-full
          bg-green-600 text-white py-3
          rounded-lg text-lg font-semibold
          hover:bg-green-700 transition shadow
        "
      >
        Enviar pedido por WhatsApp ✅
      </a>

      {/* BTN: VOLVER AL CARRITO */}
      <Link
        href="/carrito"
        className="
          inline-block mt-4 mb-20
          bg-white border-2 border-[#8A5F79]
          text-[#8A5F79] px-6 py-2 rounded-lg
          transition font-semibold
          hover:bg-[#8A5F79] hover:text-white
        "
      >
        ← Volver al carrito
      </Link>
    </div>
  );
}
