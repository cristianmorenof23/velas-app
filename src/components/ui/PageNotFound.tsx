import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full justify-center items-center gap-10 px-6 py-12">
      {/* Texto */}
      <div className="text-center md:text-left max-w-lg">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#8A5F79] mt-4">
          Whoops! Lo sentimos mucho.
        </p>
        <p className="font-light text-lg sm:text-xl md:text-2xl text-[#8A5F79] mt-2">
          Puedes regresar al
        </p>
        <Link
          href="/"
          className="font-medium hover:underline transition-all text-lg sm:text-xl md:text-2xl text-[#bd1c7d] "
        >
          Inicio
        </Link>
      </div>

    </div>
  );
}