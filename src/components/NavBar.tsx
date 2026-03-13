"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBook,
  FiUser,
  FiMail,
  FiChevronDown,
  FiChevronRight,
  FiShoppingCart
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/store/cart.store";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState<string | null>(null);
  const [hoveredDropdownDesktop, setHoveredDropdownDesktop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/", icon: <FiHome size={18} /> },
    {
      name: "Catálogo",
      href: "/catalogo",
      icon: <FiBook size={18} />,
      sublinks: [
        { name: "Velas", href: "/catalogo/velas" },
        { name: "Carrusel sin tapa", href: "/catalogo/carrusel-sin-tapa" },
        { name: "Carrusel con tapa", href: "/catalogo/carrusel-con-tapa" },
        { name: "Bandejas de Yeso", href: "/catalogo/bandejas-yeso" },
        { name: "Porta Sahumerios", href: "/catalogo/porta-sahumerios" },
        { name: "Velas con Bandeja de Yeso", href: "/catalogo/velas-bandeja-yeso" },
        { name: "Alajero de Yeso", href: "/catalogo/alajero-yeso" },
        { name: "Piezas de Yeso", href: "/catalogo/piezas-yeso" },
      ],
    },
    { name: "Sobre mí", href: "/sobre-nosotros", icon: <FiUser size={18} /> },
    { name: "Contacto", href: "/contacto", icon: <FiMail size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
          ? "bg-[#B886A3] md:bg-[#B886A3]/95 md:backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-b border-white/10"
          : "bg-[#B886A3] md:bg-[#B886A3]/70 md:backdrop-blur-lg"
        } text-[#F7F3ED]`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300
        ${scrolled ? "py-3" : "py-5"}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo_vela.png"
            alt="Luz Serena"
            width={60}
            height={60}
            priority
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-2xl font-semibold tracking-wide hidden sm:block">
            Luz Serena
          </h1>
        </Link>

        {/* Carrito Mobile */}
        <Link href="/carrito" className="md:hidden relative mr-3">
          <FiShoppingCart size={24} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-[#B886A3] text-xs font-bold px-1.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Botón Mobile */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <FiMenu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const hasSublinks = !!link.sublinks;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasSublinks && setHoveredDropdownDesktop(link.name)}
                onMouseLeave={() => hasSublinks && setHoveredDropdownDesktop(null)}
              >
                <Link href={link.href} className="flex items-center gap-1 relative group">
                  {link.icon}

                  <span className="relative">
                    <span className={isActive ? "font-semibold" : ""}>
                      {link.name}
                    </span>

                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {hasSublinks && <FiChevronDown size={12} />}
                </Link>

                {hasSublinks && (
                  <ul
                    className={`absolute left-0 mt-3 w-64 rounded-xl bg-black/40 backdrop-blur-xl shadow-xl border border-white/10 transition-all duration-300
                    ${hoveredDropdownDesktop === link.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className="block px-5 py-3 hover:bg-white/10 transition"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          {/* Carrito Desktop */}
          <Link href="/carrito" className="relative">
            <FiShoppingCart size={26} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#B886A3] text-xs font-bold px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px]
        bg-[#B886A3] pt-6 shadow-xl z-50
        transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Mobile */}
        <div className="flex items-center justify-between px-6 pb-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <Image src="/logo_vela.png" alt="Luz Serena" width={36} height={36} />
            <span className="text-lg font-semibold">Luz Serena</span>
          </div>

          <button onClick={() => setOpen(false)}>
            <FiX size={26} />
          </button>
        </div>

        <nav className="flex flex-col mt-8 gap-5 px-6 text-base font-semibold">
          {links.map((link) => {
            const hasSublinks = !!link.sublinks;

            return (
              <div key={link.name}>
                {hasSublinks ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full py-2 rounded-lg hover:bg-white/10 px-2 transition"
                      onClick={() =>
                        setOpenDropdownMobile(
                          openDropdownMobile === link.name ? null : link.name
                        )
                      }
                    >
                      <span className="flex items-center gap-2">
                        {link.icon}
                        {link.name}
                      </span>

                      <FiChevronDown
                        className={`transition ${openDropdownMobile === link.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <ul
                      className={`pl-6 flex flex-col gap-2 mt-2 text-sm transition-all duration-500
                      ${openDropdownMobile === link.name
                          ? "max-h-[400px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >
                      {link.sublinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex gap-2 items-center py-1"
                          >
                            <FiChevronRight size={14} />
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2 rounded-lg hover:bg-white/10 px-2 transition"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Carrito */}
          <Link
            href="/carrito"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 rounded-lg hover:bg-white/10 px-2 transition"
          >
            <FiShoppingCart size={20} />
            Carrito ({totalItems})
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}