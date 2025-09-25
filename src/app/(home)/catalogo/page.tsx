"use client";
import Link from "next/link";

export default function CatalogoPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 mt-32 text-center fade-in-fwd">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#8A5F79]">
        Nuestro Catálogo
      </h2>
      <p className="text-gray-700 mb-6">Selecciona una categoría</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link href="/catalogo/velas" className="p-6 bg-[#B886A3] rounded-lg text-[#F7F3ED] hover:opacity-80">
          Velas
        </Link>
        <Link href="/catalogo/carrusel-sin-tapa" className="p-6 bg-[#B886A3] rounded-lg text-[#F7F3ED] hover:opacity-80">
          Carrusel sin tapa
        </Link>
        <Link href="/catalogo/bandejas-yeso" className="p-6 bg-[#B886A3] rounded-lg text-[#F7F3ED] hover:opacity-80">
          Bandejas de Yeso
        </Link>
      </div>
    </section>
  );
}
