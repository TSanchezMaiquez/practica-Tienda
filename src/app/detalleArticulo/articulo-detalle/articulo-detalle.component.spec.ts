import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetalleComponent } from './articulo-detalle.component';

describe('ArticuloDetalleComponent', () => {
  let component: ArticuloDetalleComponent;
  let fixture: ComponentFixture<ArticuloDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticuloDetalleComponent]
    });
    fixture = TestBed.createComponent(ArticuloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
