"use client";
import { useParams } from "next/navigation";
import VelaCard from "@/components/VelasCard";

// importa todos tus arrays
import { velas } from "@/data/velas";
import { repo } from "@/data/repo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataMap: Record<string, any[]> = {
  "velas": velas,
  "carrusel-sin-tapa": repo,
  // etc...
};

export default function CatalogoSlugPage() {
  const params = useParams();
  const slug = params.slug as string;

  const productos = dataMap[slug] || []; // caemos en array vacío si no existe

  if (!productos.length) {
    return (
      <div className="mt-32 text-center">
        <h2 className="text-2xl font-bold text-[#8A5F79]">Categoría no encontrada</h2>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 mt-32 text-center fade-in-fwd">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#8A5F79] capitalize">
        {slug.replaceAll("-", " ")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((p, i) => (
          <VelaCard
            key={i}
            nombre={p.nombre}
            descripcion={p.descripcion}
            precio={p.precio}
            imagen={p.imagen}
            telefono="549XXXXXXXXX"
          />
        ))}
      </div>
    </section>
  );
}
