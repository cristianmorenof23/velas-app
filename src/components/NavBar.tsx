"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiBook, FiUser, FiMail } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Estado para submenus móviles
  const pathname = usePathname();

  const links = [
    { name: "Inicio", href: "/", icon: <FiHome size={18} /> },
    {
      name: "Catálogo",
      href: "/catalogo",
      icon: <FiBook size={18} />,
      sublinks: [
        { name: "Velas", href: "/catalogo" },
        { name: "Carrusel sin tapa", href: "/catalogo/carrusel-sin-tapa" },
        { name: "Porta Saumerios de Yeso", href: "/catalogo/porta-saumerios-yeso" },
        { name: "Bandejas de Yeso", href: "/catalogo/bandejas-yeso" },
        { name: "Vaso de Yogurt con Tapa", href: "/catalogo/vaso-yogurt-tapa" },
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
          className="flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition hover:scale-110"
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
        <div className="hidden md:flex gap-10 font-bold text-lg">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <Link href={link.href} className="flex items-center gap-2 relative">
                {link.icon}
                <span
                  className={`transition-colors ${pathname === link.href ? "text-[#F7F3ED]" : "group-hover:opacity-80"}`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#F7F3ED] transition-all duration-300 ease-in-out ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              {/* Dropdown Desktop */}
              {link.sublinks && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-[#B886A3] shadow-lg rounded-lg z-50">
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
        </div>

        {/* Botón Mobile */}
        <button
          className="md:hidden flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition hover:scale-110"
          onClick={() => setOpen(true)}
        >
          <p className="font-semibold">Menu</p>
          <FiMenu size={28} />
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#B886A3] text-[#F7F3ED] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="hover:cursor-pointer hover:opacity-80 transition hover:scale-110"
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
                {link.sublinks && <span>{openDropdown === link.name ? "-" : "+"}</span>}
              </div>

              {/* Sublinks Mobile */}
              {link.sublinks && openDropdown === link.name && (
                <div className="ml-6 mt-2 flex flex-col gap-2">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={() => setOpen(false)}
                      className="text-md hover:opacity-80"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
