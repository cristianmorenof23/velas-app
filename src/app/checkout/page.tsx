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
      <div className="pt-32 text-center text-[#8A5F79]">
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
    `¡Hola! 😊 Quiero hacer este pedido:\n\n` +
      cart
        .map(
          (item) =>
            `🕯️ ${item.nombre}\nCantidad: ${item.cantidad}\nSubtotal: $${
              item.precio * item.cantidad
            }\n`
        )
        .join("\n") +
      `\n💰 Total: $${total}\n\n¿Me confirmás disponibilidad y medios de pago?\n\n¡Gracias! 🙌`
  );

  const whatsappURL = `https://wa.me/3517376607?text=${message}`;

  const handleOrder = () => {
    clearCart();
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto px-4 text-center mt-14">
      <h2 className="text-3xl font-bold text-[#8A5F79]">Confirmar pedido 🛍️</h2>
      <p className="mt-3 text-[#8A5F79]">
        Revisá los detalles y enviá tu compra por WhatsApp 📲
      </p>

      {/* Productos */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 text-left">
        {cart.map((item) => (
          <div key={item.nombre} className="flex justify-between items-center border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <Image
                src={item.imagen}
                width={60}
                height={60}
                alt={item.nombre}
                className="rounded-md"
              />
              <div>
                <p className="font-semibold text-[#8A5F79]">{item.nombre}</p>
                <p className="text-sm text-gray-500">Cantidad: {item.cantidad}</p>
              </div>
            </div>

            <span className="font-bold text-[#B886A3]">
              ${item.cantidad * item.precio}
            </span>
          </div>
        ))}

        {/* Total */}
        <div className="text-right text-2xl font-bold text-[#8A5F79] mt-3">
          Total: ${total}
        </div>
      </div>

      {/* Medios de Pago */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg text-left shadow">
        <h4 className="font-semibold text-[#8A5F79] mb-2">Medios de Pago:</h4>
        <ul className="space-y-2 text-sm">
          <li>💸 Transferencia Bancaria</li>
          <li className="flex items-center gap-2 text-[#2E7D32]">
            <SiMercadopago size={22} /> Mercado Pago
          </li>
          <li className="flex items-center gap-2">
            <FaCcVisa size={24} />
            <FaCcMastercard size={24} />
            Tarjetas de crédito
          </li>
        </ul>
      </div>

      {/* Botón Finalizar */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOrder}
        className="inline-block mt-8 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
      >
        Finalizar Pedido por WhatsApp ✅
      </a>

      <Link
        href="/carrito"
        className="inline-block mt-4 text-[#8A5F79] font-semibold hover:underline"
      >
        Volver al carrito
      </Link>
    </div>
  );
}
