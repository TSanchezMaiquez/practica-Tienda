import { Component, OnInit } from '@angular/core';
import { Articulo } from '../card/articulo.model'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit{
  articulos: Articulo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerArticulosRest();
  }

  obtenerArticulosRest(){
    const urlEndPoint: string = "http://localhost:3002/categorias";
    this.http.get<any[]>(urlEndPoint).subscribe(
      (data) => {
        data.forEach( (articulo) =>{
          const articuloAIncluir: Articulo = new Articulo (articulo.id, articulo.nombre, articulo.imagen, articulo.descripcion);
          this.articulos.push(articuloAIncluir);
        })
      }
    )
  }

}
