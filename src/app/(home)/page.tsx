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
      icon: <FaLeaf size={60} className="text-white drop-shadow-lg" />,
    },
    {
      img: "/velas_3.jpg",
      title: "Energía Positiva",
      text: "Fragancias que revitalizan tu interior.",
      icon: <FaBolt size={60} className="text-white drop-shadow-lg" />,
    },
    {
      img: "/carrusel_1.jpg",
      title: "Ambiente Acogedor",
      text: "Transformá tu espacio en tu lugar favorito.",
      icon: <FaHome size={60} className="text-white drop-shadow-lg" />,
    },
    {
      img: "/carrusel_2.jpg",
      title: "Bienestar Emocional",
      text: "Más paz, más armonía, más luz ✨",
      icon: <FaPeace size={60} className="text-white drop-shadow-lg" />,
    },
  ];

  return (
    <>
      {/* 🎞️ SLIDER */}
      <section id="slider" className="fade-in-fwd mt-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          slidesPerView={1}
          className="w-full h-[420px] md:h-[520px]"
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

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pt-10 sm:pt-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    <div className="mb-4">{slide.icon}</div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-xl">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-lg md:text-2xl drop-shadow-md opacity-95 max-w-[90%] mx-auto">
                      {slide.text}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🌸 INFO */}
      <section className="bg-[#F7F3ED] text-[#8A5F79] py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          El poder de las velas artesanales
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-14 opacity-90">
          Velas diseñadas para crear ambientes cálidos, llenos de armonía y bienestar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-14">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <FiHeart size={48} className="text-[#B886A3] mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Artesanales</h3>
            <p className="text-sm opacity-80 mt-2">
              Hechas a mano con amor y dedicación.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <FiWind size={48} className="text-[#B886A3] mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Aromas únicos</h3>
            <p className="text-sm opacity-80 mt-2">
              Fragancias seleccionadas para cada momento especial.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <FiSmile size={48} className="text-[#B886A3] mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Bienestar</h3>
            <p className="text-sm opacity-80 mt-2">
              Diseñadas para traer paz y armonía.
            </p>
          </div>
        </div>

        <Link
          href="/catalogo"
          className="inline-block bg-[#B886A3] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#9c7090] shadow-md hover:shadow-lg transition"
        >
          Ver Catálogo 🛍️
        </Link>
      </section>

      {/* Redes sociales */}
      {/* Redes Sociales */}
      <section className="py-16 text-center bg-[#F7F3ED]">
        <h3 className="text-xl md:text-2xl font-semibold text-[#8A5F79] mb-8">
          Seguinos en redes ✨
        </h3>

        <div className="flex justify-center gap-10 md:gap-16">

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/velas.luzserena"
            target="_blank"
            className="flex flex-col items-center group transition hover:scale-110"
          >
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-[#B886A3]/40 group-hover:bg-[#B886A3]/10 transition">
              <i className="text-[#B886A3] text-3xl group-hover:text-[#8A5F79]">
                <FaInstagram />
              </i>
            </div>
            <span className="mt-2 text-sm font-semibold text-[#8A5F79]">
              @velas.luzserena
            </span>
          </Link>

        </div>

      </section>


    </>
  );
}
