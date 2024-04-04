import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DetalleComponent } from './detalleArticulo/detalle/detalle.component';
import { FichaComponent } from './detalleArticulo/ficha/ficha.component';

const routes: Routes = [
  {path: '', component: TiendaComponent},
  {path: 'nsootros', component: NosotrosComponent},
  {path: 'detalle/:categoria', component: DetalleComponent},
  {path: 'ficha', component: FichaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
