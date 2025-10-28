"use client";

import { useState } from "react";
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

  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.getTotalItems());

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
    <nav className="fixed top-0 w-full bg-[#B886A3] text-[#F7F3ED] shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_vela.png"
            alt="Luz Serena"
            width={60}
            height={60}
            priority
            className="object-contain"
          />
          <h1 className="text-2xl font-bold hidden sm:inline-block tracking-tight">Luz Serena</h1>
        </Link>

        {/* ✅ Carrito Mobile */}
        <Link href="/carrito" className="md:hidden relative mr-3">
          <FiShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 rounded-full animate-pulse">
              {totalItems}
            </span>
          )}
        </Link>

        {/* ✅ Menú Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <FiMenu size={28} />
        </button>

        {/* ✅ Menú Desktop */}
        <div className="hidden md:flex gap-10 text-lg font-semibold items-center">
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
                <Link href={link.href} className="flex items-center gap-1 hover:opacity-80">
                  {link.icon}
                  <span className={isActive ? "font-bold underline" : ""}>
                    {link.name}
                  </span>
                  {hasSublinks && <FiChevronDown size={12} />}
                </Link>

                {hasSublinks && (
                  <ul
                    className={`absolute left-0 mt-2 bg-[#B886A3] w-56 shadow-lg rounded-lg transition-all duration-300 
                    ${hoveredDropdownDesktop === link.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"}`}
                  >
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className="block px-4 py-2 hover:bg-[#A87493] transition"
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

          {/* ✅ Carrito Desktop */}
          <Link href="/carrito" className="relative">
            <FiShoppingCart size={26} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ✅ Menú Mobile Animado */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[280px] bg-[#B886A3] pt-6 shadow-xl z-50
        transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
        ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
          <FiX size={28} />
        </button>

        <nav className="flex flex-col mt-10 gap-6 px-6 text-lg font-semibold">
          {links.map((link) => {
            const hasSublinks = !!link.sublinks;

            return (
              <div key={link.name}>
                {hasSublinks ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full"
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
                      className={`pl-8 flex flex-col gap-2 mt-2 text-base transition-all duration-500 ease-out
                      ${openDropdownMobile === link.name
                          ? "max-h-[400px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-3 overflow-hidden"
                        }`}
                    >
                      {link.sublinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex gap-2 items-center"
                          >
                            <FiChevronRight size={14} />
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // ✅ Estos ya funcionan perfecto
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}

          {/* ✅ Carrito Mobile */}
          <Link
            href="/carrito"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <FiShoppingCart size={22} />
            Carrito ({totalItems})
          </Link>
        </nav>
      </div>

      {/* ✅ Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
