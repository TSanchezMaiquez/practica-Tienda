import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/articulo/articulo.model';
import { ArticuloService } from 'src/app/articulo/articulo.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
  articulo?: Articulo;
  tallasDisponibles = ['3XS', '2XS', 'XS', 'SM', 'MD', 'LG', 'XL', '2XL', '3XL', '4XL'];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.obtenerArticulo().subscribe(
      (articulo) => {
        this.articulo = articulo;
      }
    );
  }
  estaDisponible(index: number): boolean {
    const tallas = this.articulo?.getTallas();
    return tallas && index >= 0 && index < tallas.length ? tallas[index] : false;
  }
}

