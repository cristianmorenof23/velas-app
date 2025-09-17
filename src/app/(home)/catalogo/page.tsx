import Catalogo from "@/components/catalogo/Catalogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luz Serena - Catalogo",
  description: "Catálogo de velas artesanales Luz Serena",
  icons: "/logo_vela.png",

};


export default function CatalogoPage() {
  return (
    <>
      <Catalogo />
    </>
  );
}
