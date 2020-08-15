import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Hulk' },
      { id: 3, name: 'Homem Formiga' },
      { id: 4, name: 'Homem de Ferro' },
      { id: 5, name: 'Wolverine' },
      { id: 6, name: 'Aquaman' },
      { id: 7, name: 'Homem Aranha' },
      { id: 8, name: 'Super Choque' },
      { id: 9, name: 'Capitão América' },
      { id: 10, name: 'Thor' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}