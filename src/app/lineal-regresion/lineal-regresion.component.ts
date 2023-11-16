import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/datatest1.service';

@Component({
  selector: 'app-lineal-regresion',
  templateUrl: './lineal-regresion.component.html',
  styleUrls: ['./lineal-regresion.component.css']
})
export class LinealRegresionComponent implements OnInit{
  constructor(public tesService: TestService) {}

  public datos_Api_Test1: any;
  public datos_Api_Test2: any;
  public datos_Api_Test3: any;
  public datos_Api_Test4: any;

  ngOnInit(): void {
    console.log("Ingresa al ngOnit")
    this.datos_Api_Test1 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    this.datos_Api_Test2 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    this.datos_Api_Test3 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    this.datos_Api_Test4 = {
      proxy_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [ 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,],
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
    const N = x.length;
    return (
      (N * this.sumXY(x, y) - this.sumX(x) * this.sum(y)) /
      (N * this.sumYY(x) - Math.pow(this.sumX(x), 2))
    );
  }

  B0(x: number[], y: number[]): number {
    return (this.sum(y) - this.B1(x, y) * this.sumX(x)) / x.length;
  }

  yk(x: number[], y: number[], xk: number): number {
    return this.B0(x, y) + this.B1(x, y) * xk;
  }

}


/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineal-regresion',
  templateUrl: './lineal-regresion.component.html',
  styleUrls: ['./lineal-regresion.component.css']
})
export class LinealRegresionComponent implements OnInit {
  datos_Api_Test1: any;
  datos_Api_Test2: any;
  datos_Api_Test3: any;
  datos_Api_Test4: any;

  ngOnInit(): void {
    console.log("Ingresa al ngOnit");

    this.datos_Api_Test1 = {
      proxy_size: [130, 650, 99],
      actual_added: [186, 699, 132]
    };

    this.datos_Api_Test2 = {
      proxy_size: [130, 650, 99],
      actual_develop: [15.0, 69.9, 6.5]
    };

    this.datos_Api_Test3 = {
      plan_added: [163, 765, 141],
      actual_added: [186, 699, 132]
    };

    this.datos_Api_Test4 = {
      proxy_added: [163, 765, 141],
      actual_develop: [15.0, 69.9, 6.5]
    };

    this.aplicarRegresion(this.datos_Api_Test1);
    this.aplicarRegresion(this.datos_Api_Test2);
    this.aplicarRegresion(this.datos_Api_Test3);
    this.aplicarRegresion(this.datos_Api_Test4);
  }

  aplicarRegresion(datos: any): void {
    // Aquí puedes aplicar las funciones de regresión lineal según sea necesario
    const resultadoB0 = this.B0(datos.proxy_size, datos.actual_added);
    const resultadoB1 = this.B1(datos.proxy_size, datos.actual_added);

    console.log('Coeficiente B0:', resultadoB0);
    console.log('Coeficiente B1:', resultadoB1);
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
    const N = x.length;
    return (
      (N * this.sumXY(x, y) - this.sumX(x) * this.sum(y)) /
      (N * this.sumYY(x) - Math.pow(this.sumX(x), 2))
    );
  }

  B0(x: number[], y: number[]): number {
    return (this.sum(y) - this.B1(x, y) * this.sumX(x)) / x.length;
  }

  yk(x: number[], y: number[], xk: number): number {
    return this.B0(x, y) + this.B1(x, y) * xk;
  }*/