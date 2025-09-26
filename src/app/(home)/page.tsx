"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { FiHeart, FiWind, FiSmile } from "react-icons/fi";
import { FaLeaf, FaBolt, FaHome, FaPeace } from "react-icons/fa";

export default function HomePage() {
  // Array de slides con beneficios + íconos
  const v = [
    {
      img: "/velas_5.jpg",
      title: "Relajación Profunda",
      text: "Aromas suaves que calman la mente y reducen el estrés.",
      icon: <FaLeaf size={60} className="mb-4 text-white drop-shadow-md" />,
    },
    {
      img: "/velas_3.jpg",
      title: "Energía Positiva",
      text: "Fragancias cítricas que revitalizan y elevan tu ánimo.",
      icon: <FaBolt size={60} className="mb-4 text-white drop-shadow-md" />,
    },
    {
      img: "/carrusel_1.jpg",
      title: "Ambiente Acogedor",
      text: "Crea espacios cálidos y llenos de armonía en tu hogar.",
      icon: <FaHome size={60} className="mb-4 text-white drop-shadow-md" />,
    },
    {
      img: "/carrusel_2.jpg",
      title: "Bienestar Emocional",
      text: "Transforma cada rincón en un santuario de paz.",
      icon: <FaPeace size={60} className="mb-4 text-white drop-shadow-md" />,
    },
  ];

  return (
    <>
      {/* SLIDER */}
      <section id="slider" className="fade-in-fwd mt-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          className="w-full bg-cover h-[500px] md:h-[500px]"
        >
          {v.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Texto dentro de la imagen */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  {/* Animación con framer-motion */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    {slide.icon}
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-2xl drop-shadow-md">
                      {slide.text}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SECCIÓN INFO */}
      <section className="bg-[#F7F3ED] text-[#8A5F79] py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          El poder de las velas artesanales
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10">
          Nuestras velas no solo iluminan tu espacio, sino que también aportan
          armonía, energía positiva y bienestar emocional. Cada fragancia ha sido
          cuidadosamente seleccionada para transformar tu ambiente en un santuario
          de paz y calidez.
        </p>

        {/* Features con iconos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <FiHeart size={48} className="text-[#B886A3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artesanales</h3>
            <p className="text-md">
              Cada vela es hecha a mano con amor y dedicación.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FiWind size={48} className="text-[#B886A3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aromas únicos</h3>
            <p className="text-md">
              Fragancias seleccionadas para cada momento especial.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FiSmile size={48} className="text-[#B886A3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bienestar</h3>
            <p className="text-md">
              Diseñadas para crear ambientes relajantes y positivos.
            </p>
          </div>
        </div>

        {/* Botón CTA */}
        <Link
          href="/catalogo"
          className="inline-block bg-[#B886A3] text-[#F7F3ED] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#9c7090] transition"
        >
          Ver Catálogo
        </Link>
      </section>
    </>
  );
}
