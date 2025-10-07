import { Metadata } from "next";
import Image from "next/image";
import { GiCandleHolder } from "react-icons/gi";
import { LuFlower2, LuSparkles } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Luz Serena - Sobre Mi",
  description: "Historia de velas artesanales Luz Serena",
  icons: "/logo_vela.png",
};

export default function SobreMi() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 mt-24 fade-in-fwd">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#8A5F79]">
        Sobre mí
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image
          src="/women.jpg"
          alt="Sobre mí"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">
            ¡Hola! Soy <strong>Yani</strong>, creadora de
            <strong> Luz Serena Velas Artesanales</strong>. Cada vela está hecha
            a mano con dedicación y amor, utilizando materiales de calidad y
            aromas que inspiran calma y armonía.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            Mi misión es llenar tus espacios de luz y energía positiva con
            velas únicas que cuentan su propia historia.
          </p>

          <blockquote className="mt-6 italic text-[#8A5F79] border-l-4 border-[#8A5F79] pl-4">
            “Cada vela encendida es un recordatorio de que la luz siempre vuelve.”
          </blockquote>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 text-center">
        <div className="bg-[#fdf7f9] rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#fdeaf0]">
          <GiCandleHolder className="mx-auto text-4xl text-[#8A5F79] transition duration-300 hover:text-[#a46a8c]" />
          <h3 className="mt-4 text-xl font-semibold text-[#8A5F79]">
            Hecho a mano
          </h3>
          <p className="text-gray-600 mt-2">
            Cada vela se elabora cuidadosamente, con amor y atención al detalle.
          </p>
        </div>

        <div className="bg-[#fdf7f9] rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#fdeaf0]">
          <LuFlower2 className="mx-auto text-4xl text-[#8A5F79] transition duration-300 hover:text-[#a46a8c]" />
          <h3 className="mt-4 text-xl font-semibold text-[#8A5F79]">
            Aromas naturales
          </h3>
          <p className="text-gray-600 mt-2">
            Fragancias seleccionadas para brindar calma, energía y bienestar.
          </p>
        </div>

        <div className="bg-[#fdf7f9] rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#fdeaf0]">
          <LuSparkles className="mx-auto text-4xl text-[#8A5F79] transition duration-300 hover:text-[#a46a8c]" />
          <h3 className="mt-4 text-xl font-semibold text-[#8A5F79]">
            Energía positiva
          </h3>
          <p className="text-gray-600 mt-2">
            Cada vela busca llenar tu espacio de armonía y equilibrio interior.
          </p>
        </div>
      </div>

    </section>
  );
}
