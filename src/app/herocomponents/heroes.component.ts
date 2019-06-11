import {Component,OnInit} from '@angular/core'
import {HeroService} from '../hero.service'
@Component({
  selector:'app-hero',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css'],
  
})

export class HeroesComponent implements OnInit{
 heroes ;
 selectedHero;
constructor(private heroService:HeroService){

}

ngOnInit(){
this.getHeros();
}
getHeros(){
  this.heroService.getHeros().subscribe(hero =>{
    this.heroes = hero;
});
}
onSelecthero(hero){
this.selectedHero =hero;
}

}