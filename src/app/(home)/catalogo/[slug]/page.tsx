"use client";
import { useParams } from "next/navigation";
import VelaCard from "@/components/VelasCard";

// importa tus arrays
import { velas } from "@/data/velas";
import BannerPromo from "@/components/banner/BannerPromo";
import { bandejasYeso } from "@/data/bandeja_yeso";
import { carrusel_sin_tapa } from "@/data/carrusel_sin_tapa";
import ScrollTopButton from "@/components/botton-scroll/ScrollTopButton";
import { carrusel_con_tapa } from "@/data/carrusel_con_tapa";
import { saumerios } from '../../../../data/porta-saumerios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataMap: Record<string, any[]> = {
  velas: velas,
  "carrusel-sin-tapa": carrusel_sin_tapa,
  "carrusel-con-tapa": carrusel_con_tapa,
  "bandejas-yeso": bandejasYeso,
  "porta-saumerios" : saumerios,
  // etc...
};

export default function CatalogoSlugPage() {
  const params = useParams();
  const slug = params.slug as string;

  const productos = dataMap[slug] || [];

  if (!productos.length) {
    return (
      <div className="mt-32 text-center">
        <h2 className="text-2xl font-bold text-[#8A5F79]">
          Categoría no encontrada
        </h2>
      </div>
    );
  }

  return (
    <>
      {/* 🔥 Banner Promo arriba del catálogo */}
      <BannerPromo />
      <ScrollTopButton />


      <section className="max-w-7xl mx-auto px-4 py-10 mt-10 fade-in-fwd">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#8A5F79] capitalize">
          {slug.replaceAll("-", " ")}
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
          {productos.map((p, i) => (
            <VelaCard
              key={i}
              nombre={p.nombre}
              descripcion={p.descripcion}
              precio={p.precio}
              imagenes={p.imagenes}
              telefono="3517376607"
            />
          ))}
        </div>
      </section>
    </>
  );
}
