import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesviacionComponent } from './desviacion/desviacion.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {SolucionComponent } from './lineal-regresion/solucion/solucion.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
{path: '', component: MainMenuComponent},
{path: 'desviacion', component: DesviacionComponent},
{path: 'solucion', component: SolucionComponent},
{path: 'simpson', component: SimpsonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }