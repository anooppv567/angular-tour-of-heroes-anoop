import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import {Observable,of} from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn:'root'
})

export class HeroService {

  constructor( private messageService:MessageService){

  }
  getHeros():Observable<Hero[]>{
    this.messageService.addMessage('HersoService Fetched service');
    return of(HEROES);

  }
}