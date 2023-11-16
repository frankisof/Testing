import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesviacionComponent } from './desviacion.component';

describe('DesviacionComponent', () => {
  let component: DesviacionComponent;
  let fixture: ComponentFixture<DesviacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesviacionComponent]
    });
    fixture = TestBed.createComponent(DesviacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate media correctly', () => {
    component.opcion = [1, 2, 3, 4, 5];
    const media = component.calcular_media();
    expect(media).toBe(3);
  });
  it('should calculate stddev correctly', () => {
    component.opcion = [1, 2, 3, 4, 5];
    component.calcularStddev();
    expect(component.resultado2).toBe('Resultado Stddev: 1.58');
  });
  it('should calculate media on button click', () => {
    component.onClickLista1();
    expect(component.resultado1).toBe('Resultado Media');
  });
  it('should set opcion on onClickLista2', () => {
    component.onClickLista2();
    expect(component.opcion).toEqual([15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 28.4, 138.2]);
  });

  it('should set lista1 on agregarNumeroLista1', () => {
    component.agregarNumeroLista1();
    expect(component.lista1).toEqual("160\n591\n114\n229\n230\n270\n128\n1657\n624\n1530");
  });

  it('should set lista2 on agregarNumeroLista2', () => {
    component.agregarNumeroLista2();
    expect(component.lista2).toEqual("15\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n28.4");
  });
  it('should calculate and set the correct media in resultado1', () => {
    component.opcion = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1530];
    component.Media();
    expect(component.resultado1).toEqual('Resultado Media: 553.30');
  });

});
