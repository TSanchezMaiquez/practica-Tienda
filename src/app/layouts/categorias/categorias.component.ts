import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../articulo/articulo.model'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit{
  articulos: Articulo[] = [];
  enlaceSeleccionado: string = "Woman";

  constructor(private http: HttpClient, private router: Router) { }

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
  public navegarAFicha(): void {
    this.router.navigate(['detalle', this.enlaceSeleccionado]);
  }  
  public cambiarInformacionEnlaceSeleccionado (texto: string): void {
    this.enlaceSeleccionado = texto;
  }
}
