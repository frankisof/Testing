import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpsonComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
