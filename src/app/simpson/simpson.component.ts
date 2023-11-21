import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent implements OnInit{
 i:number=0;
 resultado1:number  =19
 resultado2: number=0;
 resultado3: number=0;
 funcion :number =1
 x0 : number=0
 x1: number =0;
 n : number=0;
 tolerancia: number=0;
 numero : number =0;
 dof : number = 0;
 
 
 constructor() {
      
    }
    
  
    ngOnInit() {
      
    }

    calcular_simpsont(){
      const t = this.DistributionPDF(this.numero, this.dof);
      const pdfFunc = (x:number) => t*x;
      let integral = this.simpsonRule(pdfFunc, this.x0, this.x1, this.n);
      this.resultado3=integral
return 1;
    }


    calcular_t(){
    const t = this.DistributionPDF(this.numero, this.dof);
    this.resultado2= t;
   return 1;
    }

    calcular_simson() {
      const func = (x: number) => this.funcion*x;
      const homero = this.simpsonRule(func, this.x0, this.x1, this.n);
      this.resultado1 =  homero;
      return 1;
    }
 
    simpsonRule(func: (x: number) => number, a: number, b: number, n: number) {
      
      const h = (b - a) / n;
      let sum = func(a) + func(b);
      let resultado=0;
      for (let j = 0; j < 5; j++) {
        let sum = func(a) + func(b);
        n*4
         
        for (let i = 1; i < n; i++) {
          const x = a + i * h;
          if (i % 2 === 0) {
            sum += 2 * func(x);
          } else {
            sum += 4 * func(x);
          }
        }
       resultado = (h / 3) * sum;
    
      }
      return resultado;
    }


  Gamma(x: number): number {
    let opcion =0;
    if (x%1==0){
    opcion =2; 
    }
    else {
      opcion = .5
    }
    if (x === 1) {
      return 1;
    } else {      
      let result = 1;
      while (x > opcion) {
        x--;
        result *= x;
      }
      if (opcion==.5){
        return result * Math.PI;
      }
      else {
return result;

      }
    }
  }


  DistributionPDF(t: number, dof: number): number {
      let numero1 = math.gamma(dof / 2);
      let numero2 = Math.sqrt(dof * Math.PI) * math.gamma(dof / 2);
      let base = 1 + (t * t / dof);
      let exponente = -(dof + 1) / 2;
      let resultado =(numero2 * Math.pow(base, exponente));
      const resul = numero1 /resultado
      return resul;
    }


  }
  



    
   
    
   
  
    

    
    