import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-desviacion',
  templateUrl: './desviacion.component.html',
  styleUrls: ['./desviacion.component.css']
})
export class DesviacionComponent {
  opcion: number[] = [160,591,114,229,230,270,128,1657,624,1530];
  lista1: string = "Resultado Media";
  lista2: string = "Resultado Stddev";
  resultado1: string = "Resultado Media";
  resultado2: string = "Resultado stddev";


onClickLista1() {
  this.opcion = [160,591,114,229,230,270,128,1657,624,1530];
}

onClickLista2() {
  this.opcion = [15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,28.4,138.2];
}

agregarNumeroLista1() {
  this.lista1= "160\n591\n114\n229\n230\n270\n128\n1657\n624\n1530";
}

 agregarNumeroLista2() {
  this.lista2 = "15\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n28.4";
}


calcular_media(){
  const numeros = this.opcion
  const sum = numeros.reduce((a, b) => a + b, 0);
  const media=(sum / numeros.length);
  return math.mean(numeros);
}

calcularStddev() {
  const numeros = this.opcion;
  const media = this.calcular_media();
  const sumatoriaDiferenciasAlCuadrado = this.opcion.reduce(
    (acumulador, numero) => acumulador + Math.pow(numero - media, 2),
    0
  );
  const varianzaMuestral = sumatoriaDiferenciasAlCuadrado / (this.opcion.length - 1);
  const stddevMuestral = Math.sqrt(varianzaMuestral);
  const stddevMuestralRedondeada = stddevMuestral.toFixed(2);
  this.resultado2 = `Resultado Stddev: ${parseFloat(stddevMuestralRedondeada)}`;
}

Media() {
  const media = this.calcular_media();
  this.resultado1 = `Resultado Media: ${media.toFixed(2)}`;
}
  
}