"use client";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-10 mt-20 text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#8A5F79]">Contacto</h1>
        <p className="text-gray-700 mb-6">
          Si querés más información, realizar un pedido especial o tenés alguna
          consulta, podés escribirme directamente:
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/549XXXXXXXXX?text=Hola!%20Quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/TUUSUARIO/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d9a3b3] text-white px-6 py-3 rounded-lg hover:bg-[#B886A3] transition"
          >
            <FaInstagram size={20} />
            Instagram
          </a>
          <p className="text-gray-600 mt-4">
            O envianos un email a{" "}
            <a
              href="mailto:tuemail@ejemplo.com"
              className="underline text-[#8A5F79]"
            >
              tuemail@ejemplo.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
