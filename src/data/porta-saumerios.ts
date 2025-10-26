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
  {
    nombre: "Porta Saumerio de Yeso",
    descripcion: "Porta saumerios de yeso con diseño elegante, ideal para sostener varitas de incienso.",
    precio: "$1500",
    imagenes: ["/plato_13.jpg", "/plato_15.jpg", "/plato_10.jpg", "/plato_11.jpg", "/plato_12.jpg", "/plato_14.jpg", "/plato_16.jpg",]
  },
  {
    nombre: "Porta Saumerio de Yeso Papa Noel",
    descripcion: "Porta saumerios de yeso con diseño elegante, ideal para sostener varitas de incienso.",
    precio: "$1500",
    imagenes: [ "/plato_19.jpg", "/plato_18.jpg", "/plato_20.jpg", "/plato_21.jpg", "/plato_22.jpg", "/plato_17.jpg"]
  },


]