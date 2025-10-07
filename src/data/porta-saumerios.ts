export interface Saumerio {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}



export const saumerios: Saumerio[] = [
  {
    nombre: "Porta Saumerio de Yeso",
    descripcion: "Diseño elegante para tus saumerios",
    precio: "$1500",
    imagenes: ["/saumerio_1.jpg", "/saumerio_2.jpg"]
  },
  {
    nombre: "Porta Saumerio de Yeso",
    descripcion: "Diseño elegante para tus saumerios",
    precio: "$1500",
    imagenes: ["/saumerio_3.jpg", "/saumerio_4.jpg"]
  },

]