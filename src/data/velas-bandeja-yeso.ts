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
    precio: "$4500",
    imagenes: ["/yeso_1.jpg", "/yeso_2.jpg", "/yeso_3.jpg"]
  },
  {
    nombre: "Velas con Bandeja de Yeso",
    descripcion: "Velas artesanales acompañadas de elegantes bandejas de yeso.",
    precio: "$4500",
    imagenes: ["/yeso_5.jpg", "/yeso_6.jpg", "/yeso_7.jpg", "/yeso_8.jpg", "/yeso_9.jpg"]
  },
    {
    nombre: "Velas Arboles con Bandeja de Yeso",
    descripcion: "Velas artesanales acompañadas de elegantes bandejas de yeso.",
    precio: "$5500",
    imagenes: ["/yeso_12.jpg", "/yeso_16.jpg"]
  },
      {
    nombre: "Bandeja de Yeso con Velas",
    descripcion: "Velas artesanales acompañadas de elegantes bandejas de yeso.",
    precio: "$4000",
    imagenes: ["/yeso_20.jpg"]
  },


]