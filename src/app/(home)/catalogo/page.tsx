import VelaCard from '@/components/VelasCard'
import { velas } from '@/data/velas'
import React from 'react'

export default function CatalogoPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-10 mt-20 text-center">


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
    </>
  )
}
