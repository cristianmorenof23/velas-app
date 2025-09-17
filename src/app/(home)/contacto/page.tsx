import ContactoClient from "@/components/contact/ContactoClient";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Luz Serena - Contacto",
  description: "Contacto de velas artesanales Luz Serena",
  icons: "/logo_vela.png",

};


export default function Contacto() {
  return (
    <>
      <ContactoClient />
    </>
  );
}
