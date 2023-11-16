import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MediaComponent } from './media/media.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesviacionComponent } from './desviacion/desviacion.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpsonComponent,
    MainMenuComponent,
    MediaComponent,
    DesviacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }