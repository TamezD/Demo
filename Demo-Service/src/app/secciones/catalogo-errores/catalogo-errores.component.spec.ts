import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoErroresComponent } from './catalogo-errores.component';

describe('CatalogoErroresComponent', () => {
  let component: CatalogoErroresComponent;
  let fixture: ComponentFixture<CatalogoErroresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoErroresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
