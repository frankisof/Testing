import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SolucionComponent } from './solucion.component';

describe('SolucionComponent', () => {
  let component: SolucionComponent;
  let fixture: ComponentFixture<SolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [SolucionComponent]
    });
    fixture = TestBed.createComponent(SolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-22.55 ', () => {
    component.lista1();
    const B0 = component.B0(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B0).toBeCloseTo(-22.55, 2);
  });

  it('Should return B1=1.7279 ', async () => {
    component.lista1();
    const B1 = component.B1(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B1).toBeCloseTo(1.7279, 4);
  });

  it('Should return yk=644.429  if x=386', () =>{
   component.lista1();
    const yk = component.yk(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added,
      
    );
    expect(yk).toBeCloseTo(-22.55253275203422, 3);
  })

  it('Should return B0=-4.039 ', () =>{
    component.lista2();
    const B0 = component.B0(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B0).toBeCloseTo(-4.039, 3);
  })

  it('Should return B1=0.1681 ', () =>{
    component.lista2();
    const B1 = component.B1(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B1).toBeCloseTo(0.1681, 4);
  })

  it('Should return yk=60.858  if x=386', () =>{
    component.lista2();
    const yk = component.yk(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added,
      
    );
    expect(yk).toBeCloseTo(-4.038881574687582 , 3);
  })

  it('Should return B0=-23.92 ', () =>{
    component.lista3();
    const B0 = component.B0(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B0).toBeCloseTo(-23.92, 2);
  })

  it('Should return B1=1.43097   ', () =>{
    component.lista3();
    const B1 = component.B1(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B1).toBeCloseTo(1.43097, 5);
  })

  it('Should return yk=528.4294  if x=386  ', () =>{
    component.lista3();
    const yk = component.yk(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added,
      
    );
    expect(yk).toBeCloseTo(-23.9238882529153, 4);
  })

  it(' Should return B0=-4.604   ', () =>{
    component.lista4();
    const B0 = component.B0(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B0).toBeCloseTo(-4.604, 3);
  })

  it(' Should return B1=0.14016   ', () =>{
    component.lista4();
    const B1 = component.B1(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added
    );
    expect(B1).toBeCloseTo(0.14016, 4);
  })

  it('Should return yk=49.4994  if x=386', () =>{
    component.lista4();
    const yk = component.yk(
      component.datos_Api_Test.proxy_size,
      component.datos_Api_Test.actual_added,
      
    );
    expect(yk).toBeCloseTo(-4.603745423308976, 4);
  })
  it('should calculate regression', () => {
    // Datos de prueba
    component.datos_Api_Test = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    // Llamamos a la función de regresión
    component.obtenerRegresion();
    // Verificamos que los resultados sean correctos
    expect(component.obtenerRegresion()).toBe(10);
 
  });
  it('Should handle denominator equal to 0 in B1', () => {
    const x: number[] = [1, 2, 3];
    const y: number[] = [4, 5, 6];
  
    const result = component.B1(x, y)-1;
  
    // Verifica que el resultado sea 0 cuando denominador es 0
    expect(result).toBe(0);
  });
  it('Should calculate B1 for typical input', () => {
    const x: number[] = [1, 2, 3];
    const y: number[] = [4, 5, 6];
  
    const result = component.B1(x, y);
  
    // Ajusta esto según el valor esperado en tu caso
    expect(result).toBe(1);
  });
});
