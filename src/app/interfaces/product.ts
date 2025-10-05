//1. definir la estructura de los productos

export interface Product {
    _id: string; // requerido
    imagen : string; // requerido y URL de la imagen del producto
    title: string;  // requerido
    description?: string; //(no es requerido)
    price: number; //requerido
    categories: string;
    isAvailable?: boolean;
    date?: Date;
}

