"use client";
import { useState, useEffect } from "react";
import VelaCard from "@/components/VelasCard"; // tu card mejorada
import { velas } from "@/data/velas";
import { FiArrowUp } from "react-icons/fi";

export default function Catalogo() {
  const [showButton, setShowButton] = useState(false);

  // contador dinámico (promo)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // fecha de fin de la promo
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5); // promo termina en 5 días
    endDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("¡La promo terminó!");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeLeft(`${days}d ${hours}h ${minutes}m restantes`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // scroll top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO arriba */}
      <section className="bg-gradient-to-r from-[#fdf5f8] to-[#f7e9f1] py-16 px-6 text-center mt-12">

      </section>



      {/* CATÁLOGO */}
      <section className="max-w-7xl mx-auto px-4 py-10 mt-10 fade-in-fwd">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#8A5F79]">
          Nuestro Catálogo
        </h2>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-8
          "
        >
          {velas.map((v, i) => (
            <VelaCard
              key={i}
              nombre={v.nombre}
              descripcion={v.descripcion}
              precio={v.precio}
              imagenes={v.imagenes}
              telefono="3517376607"
            />
          ))}
        </div>
      </section>

      {/* BOTÓN SCROLL TOP */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            bg-green-500 text-white 
            p-3 rounded-full shadow-lg 
            hover:bg-green-600 hover:scale-110 transition hover:cursor-pointer
          "
          aria-label="Volver arriba"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
}
