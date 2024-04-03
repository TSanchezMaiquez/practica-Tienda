import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { CardComponent } from './layouts/card/card.component';
import { CategoriasComponent } from './layouts/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    TiendaComponent,
    CarouselComponent,
    CardComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
