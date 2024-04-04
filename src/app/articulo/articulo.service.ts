import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from './articulo.interface';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  articulos: Articulo[] = [];

  constructor(private http: HttpClient) { }

  obtenerArticulosRest(): Observable<IArticulo[]> {
    const urlEndPoint: string = "http://localhost:3002/articulos";
    return this.http.get<IArticulo[]>(urlEndPoint).pipe(
      tap(articulos => {
        this.articulos = articulos.map(a => new Articulo(a.id, a.nombre, a.imagen, a.descripcion, a.precio, a.favorito, a.descuento, a.tallas));
      }),
      catchError(this.handleError<IArticulo[]>('obtenerArticulosRest', []))
    );
  }
  
  private handleError<T>(operation = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  obtenerArticulo(): Observable<Articulo> {
    if (this.articulos.length > 0) {
   
      return of(this.articulos[0]);
    } else {
 
      return of();
    }
  }
}