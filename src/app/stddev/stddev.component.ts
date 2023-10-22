import { Component , OnInit} from '@angular/core';
import { StddevService } from '../service/stddev.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit{
  constructor(private stddevService :StddevService){}
  dev_hours : any = [];
  proxy_size : any = [];
 
  
  ngOnInit(): void {
    this.stddevService .getNumbers().subscribe( (dev) => {
      this.dev_hours = dev
      console.log(dev)

  });
  this.stddevService .getNumbers2().subscribe( (size) => {
    this.proxy_size = size
    console.log(size)

});
  }



  calcular_media(num: number[]){
    const suma = num.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = suma / num.length;
    return media;

}
calcularStddev(num: number[]) {
  const numeros = num;
  const media = this.calcular_media(numeros);
  const sumatoriaDiferenciasAlCuadrado = num.reduce(
    (acumulador, numero) => acumulador + Math.pow(numero - media, 2),
    0
  );
  const varianzaMuestral = sumatoriaDiferenciasAlCuadrado / (num.length - 1); 
  const stddevMuestral = Math.sqrt(varianzaMuestral);
  const stddevMuestralRedondeada = stddevMuestral.toFixed(2);
return  parseFloat(stddevMuestralRedondeada);
}

}

