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
  FiChevronRight,
  FiShoppingCart,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/store/cart.store";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
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
        { name: "Porta Saumerios", href: "/catalogo/porta-saumerios" },
      ],
    },
    { name: "Sobre mí", href: "/sobre-nosotros", icon: <FiUser size={18} /> },
    { name: "Contacto", href: "/contacto", icon: <FiMail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#B886A3] text-[#F7F3ED] shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition hover:scale-110"
        >
          <Image
            src="/logo_vela.png"
            alt="Luz Serena"
            width={100}
            height={100}
            priority
            className="object-contain"
          />
          <h1 className="text-2xl font-bold">Luz Serena</h1>
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-10 font-bold text-lg items-center">
          {links.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredDropdown(link.name)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-2 relative"
              >
                {link.icon}
                <span
                  className={`transition-colors ${
                    pathname === link.href
                      ? "text-[#FFF]"
                      : "hover:opacity-80"
                  }`}
                >
                  {link.name}
                </span>
              </Link>

              {link.sublinks && (
                <div
                  className={`absolute left-0 mt-2 bg-[#B886A3] shadow-lg rounded-lg z-50 overflow-hidden transition-all duration-300 ${
                    hoveredDropdown === link.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="py-2 w-56">
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
                </div>
              )}
            </div>
          ))}

          {/* 🛒 Carrito Desktop */}
          <Link href="/carrito" className="relative">
            <FiShoppingCart
              size={28}
              className="hover:scale-110 transition cursor-pointer"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Botón Mobile */}
        <button
          className="md:hidden flex items-center gap-2 hover:scale-110 transition"
          onClick={() => setOpen(true)}
        >
          <p className="font-semibold">Menu</p>
          <FiMenu size={28} />
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#B886A3] text-[#F7F3ED] shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="hover:scale-110 transition"
          >
            <FiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 mt-6 text-lg font-semibold">
          {links.map((link) => (
            <div key={link.href}>
              <div
                className="flex items-center justify-between gap-2 cursor-pointer"
                onClick={() =>
                  link.sublinks
                    ? setOpenDropdown(openDropdown === link.name ? null : link.name)
                    : setOpen(false)
                }
              >
                <Link href={link.href} className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </Link>
                {link.sublinks && (
                  <span>{openDropdown === link.name ? "-" : "+"}</span>
                )}
              </div>

              {/* Sublinks Mobile */}
              {link.sublinks && (
                <div
                  className={`ml-6 mt-2 flex flex-col gap-2 transition-all ${
                    openDropdown === link.name
                      ? "opacity-100 max-h-screen translate-y-0"
                      : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                  }`}
                >
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={() => setOpen(false)}
                      className="text-md px-3 py-2 rounded-md flex items-center gap-2 hover:bg-[#A87493] transition"
                    >
                      <FiChevronRight size={14} />
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 🛒 Carrito Mobile */}
          <Link
            href="/carrito"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 mt-4 relative"
          >
            <FiShoppingCart size={26} />
            Carrito
            {totalItems > 0 && (
              <span className="absolute left-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
