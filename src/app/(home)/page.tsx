"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HomePage() {



  const v = [
    {
      img: "/velas_5.jpg",
      title: "Vela Relax",
      text: "Aromas suaves para relajarte.",
    },
    {
      img: "/velas_3.jpg",
      title: "Vela Energía",
      text: "Fragancia cítrica para energizarte.",
    },
  ];


  return (
    <>
      <section id="services" className="fade-in-fwd mt-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0} // sin espacio para que ocupe todo
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 1800 }}
          className="w-full bg-cover h-[500px] md:h-[500px]" // altura más grande y full ancho
        >
          {v.map((v, i) => (<SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src={v.img}
                alt={v.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Texto dentro de la imagen */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">{v.title}</h3>
                <p className="text-lg md:text-2xl">{v.text}</p>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
