export interface AlhajeroYeso {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}

export const alhajero_yeso: AlhajeroYeso[] = [
  {
    nombre: "Alhajero de Yeso Color Verde",
    descripcion: "Ideal para guardar tus joyas",
    precio: "$1500",
    imagenes: ["/alhajero_1.jpg", "/alhajero_2.jpg", "/alhajero_9.jpg"]
  },
  {
    nombre: "Alhajero de Yeso Color Blanco",
    descripcion: "Ideal para guardar tus joyas",
    precio: "$1500",
    imagenes: ["/alhajero_3.jpg", "/alhajero_5.jpg", "/alhajero_6.jpg"]
  },
    {
    nombre: "Alhajero de Yeso Color Negro",
    descripcion: "Ideal para guardar tus joyas",
    precio: "$1500",
    imagenes: ["/alhajero_4.jpg", "/alhajero_11.jpg"]
  },
    {
    nombre: "Alhajero de Yeso Color Rojo",
    descripcion: "Ideal para guardar tus joyas",
    precio: "$1500",
    imagenes: ["/alhajero_8.jpg", "/alhajero_7.jpg", "/alhajero_10.jpg"]
  },
]