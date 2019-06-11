import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './herocomponents/heroes.component';
import {HeroDetailsComponent} from './herodetailscomponent/hero-details.component';
import { MessageComponent } from './messagecomponent/message/message.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ,HeroesComponent,HeroDetailsComponent, MessageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
