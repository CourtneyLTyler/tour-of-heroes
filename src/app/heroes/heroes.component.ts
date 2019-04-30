import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
  // these are metadata properties

  // this is CSS selector
  selector: 'app-heroes',
  // these are location of this component's html and css files
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
 
// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  // renamed, but unassigned - not always a selected
  selectedHero: Hero;
  //  event handler used in heroes template - assigns the clicked hero from the template to the component's selectedHero, void just means it doesn't return anything.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
//  adds a private heroService of type HeroService as constructor param, defines as HeroService injection site
  constructor(private heroService: HeroService) { 
// reserve the constructor for very simple initialization
  }
  // The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }
  // retrieves the heroes from the service
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
