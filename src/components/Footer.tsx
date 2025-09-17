import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#B886A3] text-[#F7F3ED] py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-xl">Luz Serena Velas Artesanales.
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cristian Moreno. Todos los derechos reservados.</p>
        <Link href="https://wa.me/3513336631" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={14} className="hover:cursor-pointer hover:text-green-600 hover:scale-95 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/cristian-morenof23" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={14} className="hover:cursor-pointer hover:text-blue-600 hover:scale-95 transition" />
        </Link>
      </div>
    </footer>
  );
}
