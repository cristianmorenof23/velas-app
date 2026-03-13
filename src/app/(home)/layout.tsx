import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luz Serena | Velas Artesanales y Aromáticas",
  description:
    "Velas artesanales, aromáticas y decorativas hechas a mano. Diseños elegantes, aromas únicos y detalles personalizados para tus espacios.",
  keywords: [
    "velas artesanales",
    "velas aromáticas",
    "velas decorativas",
    "velas de soja",
    "regalos artesanales",
    "decoración con velas",
    "velas hechas a mano",
    "Luz Serena",
  ],
  icons: {
    icon: "/logo_vela.svg",
  },
  metadataBase: new URL("https://www.velasluzserena.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luz Serena | Velas Artesanales 🌙✨",
    description:
      "Velas artesanales hechas a mano con amor. Aromas premium y diseños exclusivos para iluminar tus momentos.",
    url: "https://www.velasluzserena.com",
    siteName: "Luz Serena",
    images: [
      {
        url: "/velas_meta.png",
        width: 1200,
        height: 630,
        alt: "Velas artesanales Luz Serena",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luz Serena | Velas Artesanales",
    description:
      "Velas artesanales y aromáticas para decorar tus espacios y crear momentos mágicos ✨",
    images: ["/velas_meta.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7F3ED] text-[#8A5F79] min-h-screen">
      {children}
    </div>
  );
}