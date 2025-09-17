// app/layout.tsx
import Navbar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#F7F3ED] text-[#8A5F79]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
