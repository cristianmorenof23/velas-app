export interface VelaBandejaYeso {
  nombre: string;
  descripcion: string;
  precio: string;
  imagenes: string[]; // <-- antes era string
}



export const velas_bandeja: VelaBandejaYeso[] = [
  {
    nombre: "Velas con Bandeja de Yeso",
    descripcion: "Velas artesanales acompañadas de elegantes bandejas de yeso.",
    precio: "$1500",
    imagenes: ["/yeso_1.jpg", "/yeso_2.jpg", "/yeso_3.jpg"]
  },
  {
    nombre: "Velas con Bandeja de Yeso",
    descripcion: "Velas artesanales acompañadas de elegantes bandejas de yeso.",
    precio: "$1500",
    imagenes: ["/yeso_5.jpg", "/yeso_6.jpg", "/yeso_7.jpg", "/yeso_8.jpg", "/yeso_9.jpg"]
  },

]