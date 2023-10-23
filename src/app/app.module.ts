import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesviacionComponent } from './desviacion/desviacion.component';
import { MediaComponent } from './media/media.component';
import { LinealRegresionComponent } from './lineal-regresion/lineal-regresion.component';

@NgModule({
  declarations: [
    AppComponent,
    DesviacionComponent,
    MediaComponent,
    LinealRegresionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
