"use client";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 
        bg-pink-500 text-white 
        p-3 rounded-full shadow-lg 
        hover:bg-pink-600 hover:scale-110 transition-all duration-300
        ${showButton ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
        z-[9999]
      `}
      aria-label="Volver arriba"
    >
      <FiArrowUp size={24} />
    </button>
  );
}
