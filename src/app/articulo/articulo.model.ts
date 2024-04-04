export class Articulo {

    private id: number;
    private nombre: string;
    private imagen: string;
    private descripcion: string;
    private precio?: number;
    private favorito?: boolean;
    private descuento?: number; 
    private tallas?: boolean[];

    constructor( id: number,  nombre: string, imagen: string, descripcion: string, precio?: number, 
        favorito?: boolean, descuento?: number, tallas?: boolean[]) 
    {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
        this.precio = precio
        this.favorito = favorito
        this.descuento = descuento
        this.tallas = tallas
    }  


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public getImagen(): string {
        return this.imagen;
    }

    public setimagen(imagen: string): void {
        this.imagen = imagen;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    public getPrecio(): number | undefined {
        return this.precio;
    }
  
    public setPrecio(precio?: number): void {
        this.precio = precio;
    }
    public getFavorito(): boolean | undefined {
        return this.favorito;
    }

    
    public setFavorito(favorito?: boolean): void {
        this.favorito = favorito;
    }
    public getDescuento(): number | undefined {
        return this.descuento;
    }
  
    public setDescuento(descuento?: number): void {
        this.descuento = descuento;
    }
    public getTallas(): boolean[] | undefined {
        return this.tallas;
      }
    
     
      public setTallas(tallas: boolean[] | undefined) {
        this.tallas = tallas;
      }
}