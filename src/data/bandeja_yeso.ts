export interface BandejaYeso {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}

export const bandejasYeso: BandejaYeso[] = [
  {
    nombre: "Bandeja Yeso Floral",
    descripcion: "Bandejas de yeso con diseño floral, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/yeso_1.jpg", "/yeso_2.jpg", "/yeso_3.jpg"]
  },
  {
    nombre: "Bandeja Yeso Floral",
    descripcion: "Bandejas de yeso con diseño floral, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/yeso_5.jpg", "/yeso_6.jpg", "/yeso_7.jpg", "/yeso_8.jpg", "/yeso_9.jpg"]
  },
    {
    nombre: "Bandeja Yeso Floral",
    descripcion: "Bandejas de yeso con diseño floral, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/yeso_10.jpg", "/yeso_11.jpg"]
  },
]