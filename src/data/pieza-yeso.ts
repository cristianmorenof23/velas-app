export interface PiezaYeso {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}



export const piezas_yeso: PiezaYeso[] = [
  {
    nombre: "Pieza de Yeso Decorativa",
    descripcion: "Pieza de yeso con diseño elegante, ideal para decorar cualquier espacio, se le puede colocar una flor u otra cosa.",
    precio: "$3000",
    imagenes: ["/plato_13.jpg", "/plato_15.jpg", "/plato_10.jpg", "/plato_11.jpg", "/plato_12.jpg", "/plato_14.jpg", "/plato_16.jpg",]
  },
  {
    nombre: "Pieza de Yeso Decorativa Papa Noel",
    descripcion: "Pieza de yeso con diseño elegante de Papa Noel, ideal para decorar cualquier espacio, se le puede colocar una flor u otra cosa.",
    precio: "$3000",
    imagenes: [ "/plato_19.jpg", "/plato_18.jpg", "/plato_20.jpg", "/plato_21.jpg", "/plato_22.jpg", "/plato_17.jpg"]
  },


]