import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luz Serena - Sobre Mi",
  description: "Historia de velas artesanales Luz Serena",
  icons: "/logo_vela.png",

};


export default function SobreMi() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-10 mt-32 fade-in-fwd">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#8A5F79]">
          Sobre mí
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Image
            src="/women.jpg"
            alt="Sobre mí"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              ¡Hola! Soy <strong>Nombre de la señora</strong>, creadora de
              <strong> Luz Serena Velas Artesanales</strong>. Cada vela está hecha a mano
              con dedicación y amor, utilizando materiales de calidad y aromas
              que inspiran calma y armonía.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Mi misión es llenar tus espacios de luz y energía positiva con
              velas únicas que cuentan su propia historia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
