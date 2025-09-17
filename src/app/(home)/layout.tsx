
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luz Serena - Velas Artesanales",
  description: "Catálogo de velas artesanales Luz Serena",
};



export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7F3ED] text-[#8A5F79] min-h-screen">
      {children}
    </div>
  );
}