import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b1f26] text-[#F7F3ED] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Marca */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold tracking-wide text-[#F7A8C1]">
            Luz Serena
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Velas artesanales creadas para transformar tus espacios en momentos
            de calma, energía y bienestar.
          </p>

          <p className="text-xs text-gray-400">
            Córdoba, Argentina
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-4">

          <h4 className="font-semibold text-[#F7A8C1]">
            Navegación
          </h4>

          <div className="flex flex-col gap-2 text-sm text-gray-300">

            <Link href="/" className="hover:text-white transition">
              Inicio
            </Link>

            <Link href="/catalogo" className="hover:text-white transition">
              Catálogo
            </Link>

            <Link href="/checkout" className="hover:text-white transition">
              Comprar
            </Link>

          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">

          <h4 className="font-semibold text-[#F7A8C1]">
            Contacto
          </h4>

          <p className="text-sm text-gray-300">
            ¿Tenés alguna consulta? Escribinos por WhatsApp.
          </p>

          <div className="flex gap-4 mt-2">

            <Link
              href="https://wa.me/3513336631"
              target="_blank"
              className="
                bg-[#3a2a33]
                p-3
                rounded-full
                hover:bg-green-500
                transition
                hover:scale-110
              "
            >
              <FaWhatsapp size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/cristian-morenof23"
              target="_blank"
              className="
                bg-[#3a2a33]
                p-3
                rounded-full
                hover:bg-blue-500
                transition
                hover:scale-110
              "
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="#"
              className="
                bg-[#3a2a33]
                p-3
                rounded-full
                hover:bg-pink-500
                transition
                hover:scale-110
              "
            >
              <FaInstagram size={18} />
            </Link>

          </div>

        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#3d2b35]">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Luz Serena Velas Artesanales · Desarrollado por Cristian Moreno
        </div>

      </div>

    </footer>
  );
}