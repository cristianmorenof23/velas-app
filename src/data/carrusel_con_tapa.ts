export interface CarruselConTapa {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}

export const carrusel_con_tapa: CarruselConTapa[] = [
  {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagenes: ["/vela_1.jpg", "/vela_2.jpg", "/vela_3.jpg"]
  },
  {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagenes: ["/vela_4.jpg", "/vela_5.jpg"]
  },
]