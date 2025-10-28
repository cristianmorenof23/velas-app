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
    precio: "$3800",
    imagenes: ["/vela_1.jpg", "/vela_2.jpg", "/vela_3.jpg"]
  },
  {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$3800",
    imagenes: ["/vela_4.jpg", "/vela_5.jpg"]
  },
    {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$3800",
    imagenes: ["/carru_10.jpg", "/carru_11.jpg"]
  },
      {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$3800",
    imagenes: ["/carru_12.jpg", "/carru_13.jpg"]
  },
      {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$3800",
    imagenes: ["/carru_14.jpg", "/carru_15.jpg"]
  },
      {
    nombre: "Vela Carrusel con Tapa",
    descripcion: "Aromas suaves para relajarte",
    precio: "$3800",
    imagenes: ["/carru_16.jpg", "/carru_17.jpg"]
  },
]