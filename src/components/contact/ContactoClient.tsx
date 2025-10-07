"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactoClient() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 fade-in-fwd mt-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Imagen decorativa */}
        <div className="md:w-1/2">
          <Image
            src="/vela_contacto.jpg"
            alt="Contacto"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            priority
            width={700}
            height={700}
          />
        </div>

        {/* Información de contacto */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold mb-4 text-[#8A5F79]">Contacto</h1>
          <p className="text-gray-700">
            Si querés más información, realizar un pedido especial o tenés alguna consulta, podés escribirme directamente:
          </p>

          {/* Cards de contacto */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <Link
              href="https://wa.me/3517376607?text=Hola!%20Quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-[#25D366] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={40} />
              <span className="font-semibold">WhatsApp</span>
            </Link>

            <Link
              href="https://www.instagram.com/velas.luzserena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-[#d9a3b3] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <FaInstagram size={40} />
              <span className="font-semibold">Instagram</span>
            </Link>

            <div className="flex flex-col items-center gap-2 bg-white text-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-2xl hover:scale-105 transition-transform">
              <FaClock size={30} className="text-[#8A5F79]" />
              <span className="font-semibold">Horario</span>
              <span>10:00 - 19:00</span>
            </div>

            <div className="flex flex-col items-center gap-2 bg-white text-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-2xl hover:scale-105 transition-transform">
              <FaMapMarkerAlt size={30} className="text-[#8A5F79]" />
              <span className="font-semibold">Ubicación</span>
              <span>Córdoba, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
