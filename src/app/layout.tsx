// app/layout.tsx
import Navbar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Luz Serena - Velas Artesanales",
  description: "Catálogo de velas artesanales Luz Serena",
  icons: "/logo_vela.png",

};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#F7F3ED] text-[#8A5F79]">
        <Navbar />
        {children}
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
