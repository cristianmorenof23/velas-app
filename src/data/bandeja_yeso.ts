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
  {
    nombre: "Plato Redondo de Yeso",
    descripcion: "Platos redondos de yeso, perfectos para velas o decoración. Se vende por cantidad",
    precio: "$1500",
    imagenes: ["/plato_1.jpg", "/plato_2.jpg"]
  },
  {
    nombre: "Bandeja Rectangular Yeso",
    descripcion: "Bandejas rectangulares de yeso, ideales para múltiples usos en decoración.",
    precio: "$1500",
    imagenes: ["/plato_3.jpg", "/plato_4.jpg"]
  },
  {
    nombre: "Bandeja Yeso",
    descripcion: "Bandejas de yeso, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/plato_5.jpg", "/plato_6.jpg", "/plato_7.jpg", "/plato_8.jpg", "/plato_9.jpg"]
  },
]