import Image from "next/image";

export default function SobreMi() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-10 mt-20 fade-in-fwd">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#8A5F79]">
          Sobre mí
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Image
            src="/sobre-mi.jpg" // poné foto de ella o de su taller en public
            alt="Sobre mí"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              ¡Hola! Soy <strong>Nombre de la señora</strong>, creadora de
              <strong> Luz Serena Velas Artesanales</strong>. Cada vela está hecha a mano
              con dedicación y amor, utilizando materiales de calidad y aromas
              que inspiran calma y armonía.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Mi misión es llenar tus espacios de luz y energía positiva con
              velas únicas que cuentan su propia historia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
