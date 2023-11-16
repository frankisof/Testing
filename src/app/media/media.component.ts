import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  constructor(private mediaService :MediaService){}
  dev_hours : any = [];
  proxy_size : any = [];
 
  
  ngOnInit(): void {
   

  
  
  }

  calcular_media(num: number[]){
    const suma = num.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = suma / num.length;
    const mediaRedondeada = parseFloat(media.toFixed(2));
    return mediaRedondeada;
  }
  


  
}