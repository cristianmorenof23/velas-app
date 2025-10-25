export interface Saumerio {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}



export const saumerios: Saumerio[] = [
  {
    nombre: "Porta Saumerio de Yeso",
    descripcion: "Porta saumerios de yeso con diseño elegante, ideal para sostener varitas de incienso.",
    precio: "$1500",
    imagenes: ["/plato_5.jpg", "/plato_6.jpg", "/plato_7.jpg", "/plato_8.jpg", "/plato_9.jpg"]
  },

]