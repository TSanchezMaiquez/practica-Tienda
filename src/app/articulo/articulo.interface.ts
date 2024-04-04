export interface IArticulo {
     id: number;
     nombre: string;
     imagen: string;
     descripcion: string;
     precio?: number;
     favorito?: boolean;
     descuento?: number; 
     tallas?: boolean[];
}