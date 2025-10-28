export interface Saumerio {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}



export const saumerios: Saumerio[] = [
  {
    nombre: "Porta Sahumerio de Yeso - Blanco",
    descripcion: "Porta sahumerios de yeso con diseño elegante, ideal para sostener varitas de incienso.",
    precio: "$1500",
    imagenes: ["/plato_5.jpg", "/plato_6.jpg", "/plato_7.jpg", "/plato_8.jpg", "/plato_9.jpg"]
  },
  {
    nombre: "Porta Sahumerio de Yeso Doradas y Plateadas",
    descripcion: "Porta sahumerios de yeso pintados en dorado y plateado, perfectos para ocasiones especiales.",
    precio: "$2500",
    imagenes: ["/yeso_15.jpg", "/yeso_17.jpg", "/yeso_18.jpg"]
  },


]