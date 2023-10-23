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
    this.tesService.obtenerDatos1().subscribe((data: any) => {
      console.log("Ingresa al componente.Test1")
      this.datos_Api_Test1 = data;
    })
    this.tesService.obtenerDatos2().subscribe((data: any) => {
      console.log("Ingresa al componente.Test2")
      this.datos_Api_Test2 = data;
    })
    this.tesService.obtenerDatos3().subscribe((data: any) => {
      console.log("Ingresa al componente.Test3")
      this.datos_Api_Test3 = data;
    })
    this.tesService.obtenerDatos4().subscribe((data: any) => {
      console.log("Ingresa al componente.Test4")
      this.datos_Api_Test4 = data;
    })
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
