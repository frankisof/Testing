import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { MediaService } from '../services/media.service';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let dev_hours: number[] = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  let proxy_size: number[] =  [160,591, 114, 229, 230,270,128,1657,624,1503]
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [MediaService],
    });
   
    mediaService = TestBed.inject(MediaService);
    fixture = TestBed.createComponent(MediaComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
  });


 
  it('debería recibir una lista de números desde el servicio numero 1',  fakeAsync (() => {
    const testNumbers = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(mediaService, 'getNumbers').and.returnValue(of(testNumbers));
    component.ngOnInit();
    tick();
    expect(component.dev_hours).toEqual(dev_hours);
    
     }));

     it('debería recibir una lista de números desde el servicio numero 2',  fakeAsync (() => {
      const testNumbers = [160,591, 114, 229, 230,270,128,1657,624,1503];   
      spyOn(mediaService, 'getNumbers2').and.returnValue(of(proxy_size));
      component.ngOnInit();
      tick();
      expect(component.proxy_size).toEqual(proxy_size);
       }));



       it('debería mostrar la media del servicio 1',  fakeAsync (() => {
        spyOn(mediaService, 'getNumbers').and.returnValue(of(dev_hours));
        component.ngOnInit();
        tick();
        expect(component.calcular_media(component.dev_hours)).toEqual(60.32);
         }));


       it('debería mostrar la media del servicio 2',  fakeAsync (() => {
        spyOn(mediaService, 'getNumbers2').and.returnValue(of(proxy_size));
        component.ngOnInit();
        tick();
        expect(component.calcular_media(component.proxy_size)).toEqual(550.6);
         }));
 
 
});