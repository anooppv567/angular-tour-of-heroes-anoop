import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './herocomponents/heroes.component';
import {HeroDetailsComponent} from './herodetailscomponent/hero-details.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,HeroesComponent,HeroDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
