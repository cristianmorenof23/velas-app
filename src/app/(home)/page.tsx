"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiHeart, FiWind, FiSmile } from "react-icons/fi";
import { FaLeaf, FaBolt, FaHome, FaPeace, FaInstagram } from "react-icons/fa";

export default function HomePage() {
  const slides = [
    {
      img: "/velas_5.jpg",
      title: "Relajación Profunda",
      text: "Aromas que calman la mente y liberan tensiones.",
      icon: <FaLeaf size={60} className="text-white drop-shadow-xl" />,
    },
    {
      img: "/velas_3.jpg",
      title: "Energía Positiva",
      text: "Fragancias que revitalizan tu interior.",
      icon: <FaBolt size={60} className="text-white drop-shadow-xl" />,
    },
    {
      img: "/carrusel_1.jpg",
      title: "Ambiente Acogedor",
      text: "Transformá tu espacio en tu lugar favorito.",
      icon: <FaHome size={60} className="text-white drop-shadow-xl" />,
    },
    {
      img: "/carrusel_2.jpg",
      title: "Bienestar Emocional",
      text: "Más paz, más armonía, más luz ✨",
      icon: <FaPeace size={60} className="text-white drop-shadow-xl" />,
    },
  ];

  return (
    <>
      {/* HERO SLIDER */}
      <section className="mt-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          slidesPerView={1}
          className="w-full h-[420px] sm:h-[500px] md:h-[620px]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">

                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex flex-col items-center max-w-3xl"
                  >

                    <div className="mb-5">{slide.icon}</div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#F7F3ED] bg-clip-text text-transparent drop-shadow-xl">
                      {slide.title}
                    </h2>

                    <p className="mt-4 text-base sm:text-lg md:text-2xl opacity-95 max-w-[90%]">
                      {slide.text}
                    </p>

                  </motion.div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* INFO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#F7F3ED] text-[#8A5F79] py-20 px-6 md:px-12 text-center"
      >

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          El poder de las velas artesanales
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-16 opacity-90">
          Velas diseñadas para crear ambientes cálidos, llenos de armonía y bienestar.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

          <div className="p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <FiHeart size={48} className="text-[#B886A3] mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Artesanales</h3>
            <p className="text-sm opacity-80 mt-2">
              Hechas a mano con amor y dedicación.
            </p>
          </div>

          <div className="p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <FiWind size={48} className="text-[#B886A3] mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Aromas únicos</h3>
            <p className="text-sm opacity-80 mt-2">
              Fragancias seleccionadas para cada momento especial.
            </p>
          </div>

          <div className="p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <FiSmile size={48} className="text-[#B886A3] mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Bienestar</h3>
            <p className="text-sm opacity-80 mt-2">
              Diseñadas para traer paz y armonía.
            </p>
          </div>

        </div>

        {/* CTA */}
        <Link
          href="/catalogo"
          className="inline-block bg-gradient-to-r from-[#B886A3] to-[#9c7090] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Ver Catálogo 🛍️
        </Link>

      </motion.section>

      {/* REDES SOCIALES */}
      <section className="py-20 text-center bg-[#F7F3ED]">

        <h3 className="text-xl md:text-2xl font-semibold text-[#8A5F79] mb-10">
          Seguinos en redes ✨
        </h3>

        <div className="flex justify-center">

          <Link
            href="https://www.instagram.com/velas.luzserena"
            target="_blank"
            className="flex flex-col items-center group transition hover:scale-110"
          >

            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#B886A3]/40 group-hover:bg-gradient-to-r group-hover:from-[#B886A3] group-hover:to-[#9c7090] transition">

              <FaInstagram className="text-[#B886A3] text-3xl group-hover:text-white" />

            </div>

            <span className="mt-3 text-sm font-semibold text-[#8A5F79]">
              @velas.luzserena
            </span>

          </Link>

        </div>

      </section>
    </>
  );
}