import { Component } from '@angular/core';
import { Articulo } from 'src/app/articulo/articulo.model';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/articulo/articulo.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  categoria: string = "woman";
  articulos: Articulo[] = [];

  constructor(private route: ActivatedRoute, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
    });
    this.obtenerArticulosRest();
  }


obtenerArticulosRest(){
  this.articuloService.obtenerArticulosRest().subscribe(
    (data) => {
      data.forEach( (articulo) =>{
        const articuloAIncluir: Articulo = new Articulo (articulo.id, articulo.nombre, articulo.imagen, articulo.descripcion, articulo.precio, articulo.favorito, articulo.descuento, articulo.tallas);
        this.articulos.push(articuloAIncluir);
      })
    }
  )
}
}


