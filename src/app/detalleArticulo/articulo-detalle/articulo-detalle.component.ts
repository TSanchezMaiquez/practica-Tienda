import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/articulo/articulo.model';


@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent {

  @Input() articulo?: Articulo;
  @Output() articuloSeleccionado: EventEmitter<number> = new EventEmitter<number>();


  constructor(private router: Router) { }
  onClickArticulo() {
    this.router.navigate(['/ficha', { articulo: this.articulo }]);
  }

}
