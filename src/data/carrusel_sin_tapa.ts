export interface CarruselSinTapa {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}

export const carrusel_sin_tapa: CarruselSinTapa[] = [
  {
    nombre: "Carrusel Sin Tapa Diseño Floral",
    descripcion: "Carrusel sin tapa con diseño floral, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/carru_1.jpg", "/carru_2.jpg", "/carru_3.jpg"]
  },
  {
    nombre: "Carrusel Sin Tapa Diseño Geométrico",
    descripcion: "Carrusel sin tapa con diseño geométrico, ideales para decoración.",
    precio: "$1500",
    imagenes: ["/carru_4.jpg", "/carru_5.jpg"]
  }
]