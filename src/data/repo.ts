export interface Repo {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string; // nombre del archivo en /public
}



export const repo: Repo[] = [
  {
    nombre: "Vela Relax",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagen: "/repo_1.jpg",
  },
    {
    nombre: "Vela Relax",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagen: "/repo_2.jpg",
  },  {
    nombre: "Vela Relax",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagen: "/repo_3.jpg",
  },
]