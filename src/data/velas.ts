// data/velas.ts
export interface Vela {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string; // nombre del archivo en /public
}

export const velas: Vela[] = [
  {
    nombre: "Vela Relax",
    descripcion: "Aromas suaves para relajarte",
    precio: "$1500",
    imagen: "/velas_1.jpg",
  },
  {
    nombre: "Vela Energía",
    descripcion: "Fragancia cítrica para energizarte",
    precio: "$1700",
    imagen: "/velas_2.jpg",
  },
  // Agregás más velas así
];
