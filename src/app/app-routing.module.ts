import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesviacionComponent } from './desviacion/desviacion.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
{path: '', component: MainMenuComponent},
{path: 'desviacion', component: DesviacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
