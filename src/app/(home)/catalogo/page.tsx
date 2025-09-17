"use client";
import { useState, useEffect } from "react";
import VelaCard from "@/components/VelasCard";
import { velas } from "@/data/velas";
import { FiArrowUp } from "react-icons/fi";

export default function CatalogoPage() {
  const [showButton, setShowButton] = useState(false);

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
      <section className="max-w-3xl mx-auto px-4 py-10 mt-32 text-center fade-in-fwd">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#8A5F79]">
          Nuestro Catálogo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {velas.map((v, i) => (
            <VelaCard
              key={i}
              nombre={v.nombre}
              descripcion={v.descripcion}
              precio={v.precio}
              imagen={v.imagen}
              telefono="549XXXXXXXXX" // teléfono de la señora
            />
          ))}
        </div>
      </section>

      {/* BOTÓN SCROLL TOP */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#B886A3] text-[#F7F3ED] p-3 hover:cursor-pointer hover:scale-125 rounded-full shadow-lg hover:bg-[#9c7090] transition"
          aria-label="Volver arriba"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
}
