import { Component } from '@angular/core';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent {
  Valor_x: number =0;
  resultado1: number = 0;
  resultado2: string = "resultadoB0";
  resultado3: string = "resultadoyk";
  array1: string = "resultadoyk";

  constructor() { }

  public datos_Api_Test: any;


  ngOnInit(): void {
    console.log("Ingresa al ngOnit")
    this.datos_Api_Test = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
  }
  lista1() {
    this.datos_Api_Test = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
  }
  lista2() {
    this.datos_Api_Test = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };
  }

  lista3() {
    this.datos_Api_Test = {
      proxy_size: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
  }

  lista4() {
    this.datos_Api_Test = {
      proxy_size: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,],
    };
  }
  sum(data: number[]): number {
    return data.reduce((acc, value) => acc + value, 0);
  }

  sumXY(x: number[], y: number[]): number {
    return this.sum(x.map((value, index) => value * y[index]));
  }

  sumX(x: number[]): number {
    return this.sum(x);
  }

  sumYY(y: number[]): number {
    return this.sum(y.map((value) => value * value));
  }



  B1(x: number[], y: number[]): number {
    const N = x.length;5
    const denominador = N * this.sumYY(x) - Math.pow(this.sumX(x), 2);
    const numerador = N * this.sumXY(x, y) - this.sumX(x) * this.sum(y);
    
    const result =  numerador / denominador ;
    //const result = denominador !== 0 ? numerador / denominador : 0;
  this.resultado1=result;
    return result;
  }

  B0(x: number[], y: number[]): number {
    const resultadoB1 = this.B1(x, y);
    const resultadoB0 = (this.sum(y) - resultadoB1 * this.sumX(x)) / x.length;
  
    this.resultado2 = `Coeficiente B0: ${resultadoB0}`;
  
    return resultadoB0;
  }
  yk(x: number[], y: number[]): number {
    const resultadoB0 = this.B0(x, y);
    const resultadoB1 = this.B1(x, y);
    const resultadoyk = resultadoB0 + resultadoB1 * this.Valor_x;
  
    this.resultado3 = `Resultado yk para xk=${this.Valor_x}: ${resultadoyk}`;
  
    return resultadoyk;
  }

  obtenerRegresion(): number {
  
  
    const resultadoB0 = this.B0(this.datos_Api_Test.proxy_size, this.datos_Api_Test.actual_added);
    const resultadoB1 = this.B1(this.datos_Api_Test.proxy_size, this.datos_Api_Test.actual_added);
    const resultadoyk = this.yk(this.datos_Api_Test.proxy_size, this.datos_Api_Test.actual_added);
  

    return 10;

  }

   
}
