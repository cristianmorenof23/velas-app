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
    precio: "$2500",
    imagenes: ["/yeso_10.jpg", "/yeso_33.jpg"]
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
    nombre: "Cuencos de Yeso Decorativos",
    descripcion: "Cuencos de yeso con detalles decorativos, ideales para velas o pequeños objetos.",
    precio: "$1500",
    imagenes: ["/saumerio_1.jpg", "/saumerio_2.jpg"]
  },
  {
    nombre: "Cuencos de Yeso Decorativos",
    descripcion: "Cuencos de yeso con detalles decorativos, ideales para velas o pequeños objetos.",
    precio: "$1500",
    imagenes: ["/saumerio_3.jpg", "/saumerio_4.jpg"]
  },


]