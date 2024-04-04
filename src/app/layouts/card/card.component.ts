import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../articulo/articulo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  articulos: Articulo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.obtenerArticulosRest();
  }
  
  obtenerArticulosRest(){
    const urlEndPoint: string = "http://localhost:3002/card";
    this.http.get<any[]>(urlEndPoint).subscribe(
      (data) => {
        this.articulos = data.map(item => new Articulo(item.id, item.nombre, item.imagen, item.descripcion));
      },
      (error) => {
        console.error('Error al obtener objeto:', error);
      }
    );
  }
}

