"use client";
import { useEffect, useState } from "react";

export default function BannerPromo() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);
    endDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("¡La promo terminó!");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m restantes`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#8A5F79] text-white py-8 px-6 text-center mt-44">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          🌟 Promo Especial de Este Mes 🌟
        </h2>
        <p className="text-lg mb-1">
          Llevá 3 velas y obtené un 10% de descuento en tu compra ✨
        </p>
        <p className="text-md font-semibold">{timeLeft}</p>
      </div>
    </section>
  );
}
