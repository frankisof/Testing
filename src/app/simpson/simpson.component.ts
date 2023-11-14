import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent implements OnInit{
 
    constructor() {
      
    }
    
  
    ngOnInit() {
      
    }
 
    simpsonRule(func: (x: number) => number, a: number, b: number, n: number) {
      
      const h = (b - a) / n;
      let sum = func(a) + func(b);
      let resultado=0;
      for (let j = 0; j < 5; j++) {
        let sum = func(a) + func(b);
        n*2
         
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
  



    
   
    
   
  
    

    
    