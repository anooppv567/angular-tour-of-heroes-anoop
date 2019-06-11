import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HeroesComponent } from '../herocomponents/heroes.component'

const routes:Routes = [
  { path:'heroes', component:HeroesComponent}
]
@NgModule({
  
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
  
})
export class AppRoutingModule { }