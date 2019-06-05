import {Component,OnInit} from '@angular/core'
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
@Component({
  selector:'app-hero',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
 heroes = HEROES;
 selectedHero;
constructor(){

}

ngOnInit(){

}

onSelecthero(hero){
this.selectedHero =hero;
}

}