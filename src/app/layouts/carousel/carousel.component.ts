import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from './imagen.intercace';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imagenes: Imagen[] = [];

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.obtenerArticulosRest();
  }

  private obtenerArticulosRest() {
    const urlEndPoint: string = "http://localhost:3002/carousel";
    this.http.get<Imagen[]>(urlEndPoint).subscribe(
      (data) => {
        this.imagenes = data;
      },
      (error) => {
        console.error('Error al obtener imágenes:', error);
      }
    );
  }
}