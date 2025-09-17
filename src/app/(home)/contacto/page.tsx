"use client";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Contacto() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 fade-in-fwd mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen decorativa */}
        <div className="md:w-1/2">
          <Image
            src="/vela_contacto.jpg"
            alt="Contacto"
            className="rounded-2xl shadow-lg"
            priority
            width={700}
            height={700}
          />
        </div>

        {/* Información de contacto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6 text-[#8A5F79]">
            Contacto
          </h1>
          <p className="text-gray-700 mb-6">
            Si querés más información, realizar un pedido especial o tenés alguna
            consulta, podés escribirme directamente:
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mb-4">
            <a
              href="https://wa.me/549XXXXXXXXX?text=Hola!%20Quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-green-500 transition shadow-md"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/TUUSUARIO/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d9a3b3] text-white px-6 py-3 rounded-lg hover:bg-[#B886A3] transition shadow-md"
            >
              <FaInstagram size={20} />
              Instagram
            </a>
          </div>
          <p className="text-gray-600 mt-2">
            O envianos un email a{" "}
            <a
              href="mailto:tuemail@ejemplo.com"
              className="underline text-[#8A5F79]"
            >
              tuemail@ejemplo.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
