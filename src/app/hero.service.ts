import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
// method to return mock heroes array
// of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  getHeroes(): Observable<Hero[]> {
      return of(HEROES);
  }

  constructor() { }
}
