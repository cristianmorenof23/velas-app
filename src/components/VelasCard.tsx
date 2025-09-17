import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  telefono: string; // con código país
}

export default function VelaCard({
  nombre,
  descripcion,
  precio,
  imagen,
  telefono,
}: Props) {
  const mensaje = `Hola, soy Cristian, me interesó la vela ${nombre}, ¿cómo puedo comprarla?`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <Image
        src={imagen}
        alt={nombre}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-[#8A5F79]">{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <p className="text-[#8A5F79] font-bold mt-2">{precio}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
        >
          <FaWhatsapp className="mr-2" />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
