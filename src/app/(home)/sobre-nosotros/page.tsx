"use client";
import Image from "next/image";
import Link from "next/link";
import { GiCandleHolder } from "react-icons/gi";
import { LuFlower2, LuSparkles } from "react-icons/lu";
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 mt-24 fade-in-fwd">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-[#8A5F79] tracking-tight">
        Sobre mí
      </h1>

      {/* HERO SOBRE MI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            ¡Hola! Soy <strong>Yani</strong>, creadora de
            <strong> Luz Serena Velas Artesanales</strong>. Cada vela está hecha
            a mano con dedicación y amor, utilizando materiales de calidad y
            aromas que inspiran calma y armonía.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            Mi misión es llenar tus espacios de luz y energía positiva con
            velas únicas que cuentan su propia historia.
          </p>

          <blockquote className="mt-6 italic text-[#8A5F79] border-l-4 border-[#8A5F79] pl-4 text-lg">
            “Cada vela encendida es un recordatorio de que la luz siempre vuelve.”
          </blockquote>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl shadow-xl backdrop-blur-sm bg-white/50 p-2">
            <Image
              src="/logo_sobremi.jpg"
              alt="Sobre mí"
              width={600}
              height={700}
              className="rounded-3xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* ICON FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
        {[
          {
            icon: <GiCandleHolder className="text-4xl" />,
            title: "Hecho a mano",
            text: "Cada vela está elaborada con amor y dedicación.",
          },
          {
            icon: <LuFlower2 className="text-4xl" />,
            title: "Aromas naturales",
            text: "Fragancias seleccionadas para bienestar y equilibrio.",
          },
          {
            icon: <LuSparkles className="text-4xl" />,
            title: "Energía positiva",
            text: "Presencia que transforma tus espacios.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#fdf7f9] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-[#f4e5ec] flex items-center justify-center text-[#8A5F79]">
              {item.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#8A5F79]">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Redes */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 mb-3">
          Seguí mis creaciones y novedades ✨
        </p>

        <Link
          href="https://www.instagram.com/velas.luzserena"
          target="_blank"
          className="inline-flex items-center gap-3 text-[#E1306C] hover:text-[#B82A59] transition-all text-lg font-medium hover:scale-110"
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0..." />
          </svg>
          @velas.luzserena
        </Link>
      </motion.div>
    </section>
  );
}
