"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function ContactoClient() {
  return (

    <section className="max-w-5xl mx-auto px-4 py-16 fade-in-fwd mt-32">
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
            <Link
              href="https://wa.me/3517376607?text=Hola!%20Quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-green-500 transition shadow-md"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/TUUSUARIO/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d9a3b3] text-white px-6 py-3 rounded-lg hover:bg-[#B886A3] transition shadow-md"
            >
              <FaInstagram size={20} />
              Instagram
            </Link>
          </div>
          <p className="text-gray-600 mt-2">
            O envianos un email a{" "}
            <Link
              href="mailto:tuemail@ejemplo.com"
              className="underline text-[#8A5F79]"
            >
              tuemail@ejemplo.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
