import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { StddevService } from '../service/stddev.service';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';
describe('StddevComponent', () => {
  let dev_hours: number[] = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  let proxy_size: number[] =  [160,591, 114, 229, 230,270,128,1657,624,1503]
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let stddevService: StddevService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [StddevService],
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    stddevService = TestBed.inject(StddevService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debería recibir una lista de números desde el servicio numero 1',  fakeAsync (() => {
    const testNumbers = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(stddevService, 'getNumbers').and.returnValue(of(testNumbers));
    component.ngOnInit();
    tick();
    expect(component.dev_hours).toEqual(dev_hours);
    
     }));

     it('debería recibir una lista de números desde el servicio numero 2',  fakeAsync (() => {
      const testNumbers = [160,591, 114, 229, 230,270,128,1657,624,1503];   
      spyOn(stddevService, 'getNumbers2').and.returnValue(of(proxy_size));
      component.ngOnInit();
      tick();
      expect(component.proxy_size).toEqual(proxy_size);
       }));

       it('debería mostrar la stddev del servicio 1',  fakeAsync (() => {
        spyOn(stddevService, 'getNumbers').and.returnValue(of(dev_hours));
        component.ngOnInit();
        tick();
        expect(component.calcularStddev(component.dev_hours)).toEqual(62.26);
         }));

       it('debería mostrar la media del servicio 2',  fakeAsync (() => {
        spyOn(stddevService, 'getNumbers2').and.returnValue(of(proxy_size));
        component.ngOnInit();
        tick();
        expect(component.calcularStddev(component.proxy_size)).toEqual(572.03);
         }));
 
 

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
    

  
 

      


