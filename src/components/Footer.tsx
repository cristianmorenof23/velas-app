import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#B886A3] to-[#F7A8C1] text-[#F7F3ED] py-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Marca */}
        <div className="text-center md:text-left text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">
          Luz Serena Velas Artesanales
        </div>

        {/* Derechos y Redes */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base">
          <p className="text-opacity-90">&copy; {new Date().getFullYear()} Cristian Moreno. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="https://wa.me/3513336631" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                size={24}
                className="hover:text-green-400 transition transform hover:scale-125 hover:rotate-6"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/cristian-morenof23" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={24}
                className="hover:text-blue-400 transition transform hover:scale-125 hover:-rotate-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
