import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
// method to return mock heroes array
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
