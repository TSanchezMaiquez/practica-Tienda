export class Articulo {

    private id: number;
    private nombre: string;
    private imagen: string;
    private descripcion: string;

    constructor( id: number,  nombre: string, imagen: string, descripcion: string) 
    {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
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
}