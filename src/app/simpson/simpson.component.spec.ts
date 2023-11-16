import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('prueba 3', () => {
    const x0 = 1;         // limite inferior 
    const x1 = 4;         // limite superior 
    const num_seg = 6;    // Numero de segmentos
    const limite =0.0001;

 
     const func = (x: number) => 1 / x;
     const result = component.simpsonRule(func, x0, x1, num_seg);
     const roundedResult = Number(result.toFixed(3));
     expect(roundedResult).toBeCloseTo(1.388, 7); 
   
    });

  it('prueba 2', () => {
    const x0 = 0;         // limite inferior 
    const x1 = 1;         // limite superior 
    const num_seg = 4;    // Numero de segmentos
    const limite =0.0001;

     // Función a integrar 2x
     //caso 1 const func = (x: number) => 2 * x; 
     const func = (x: number) => x * x;
     
     const result = component.simpsonRule(func, x0, x1, num_seg);
     const roundedResult = Number(result.toFixed(3));
     expect(roundedResult).toBeCloseTo(0.333, 7); 
   
    });


  it('prueba 1', () => {
    const x0 = 0;         // limite inferior 
    const x1 = 4;         // limite superior 
    const num_seg = 4;    // Numero de segmentos
    const limite =0.0001;

     // Función a integrar 2x
    const func = (x: number) => 2 * x; 
   
     
     const result = component.simpsonRule(func, x0, x1, num_seg);
     const roundedResult = Number(result.toFixed(3));
     expect(roundedResult).toBeCloseTo(16, 7); 
   
    });
    it('prueba funcion gama con numero decimal', () => {
      expect( component.Gamma(4.5) ).toBeCloseTo(20.61, 1); 
      });

      it('prueba funcion gama con numero entero', () => {
        expect( component.Gamma(5) ).toBeCloseTo(24, 0); 
        });
        it('Calcular T prueba 1', () => {
          const a = 0;
          const b = 1.1;
          const n = 3;
          const t = 1.1;
          const dof = 9;
          let pdf = component.DistributionPDF(t, dof);
          const pdfFunc = (x:number) => pdf;
          let integral = component.simpsonRule(pdfFunc, a, b, n);
          expect(integral).toBeCloseTo( 0.35006); 

        });
         it('Calcular T prueba 2', () => {
          const a = 0;
          const b = 1;
          const n = 4;
          const t = 1.1812;
          const dof = 10;
          let pdf = component.DistributionPDF(t, dof);
          const pdfFunc = (x:number) => pdf;
          let integral = component.simpsonRule(pdfFunc, a, b, n);
          expect(integral).toBeCloseTo( 0.36757); 

        });
        it('Calcular T prueba 3', () => {
          const a = 1;
          const b = 1.15;
          const n = 15;
          const t = 2.750;
          const dof = 30;
          let pdf = component.DistributionPDF(t, dof);
          const pdfFunc = (x:number) => pdf;
          let integral = component.simpsonRule(pdfFunc, a, b, n);
          expect(integral).toBeCloseTo( 0.49500); 

        });

        it('should return 1 when x is 1', () => {
          const result = component.Gamma(1);
      
          expect(result).toEqual(1);
        });
      });
  
   
 
  

