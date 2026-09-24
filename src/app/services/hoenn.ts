import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../gym-leader.model';

@Injectable( { providedIn: 'root' })
export class HoennService {
    private registry = signal([
    {
      name: 'Roxanne',
      badge: 'Stone Badge',
      town: 'Rustboro City',
      specialty: 'Rock',
      pokemonTeam: ['Geodude', 'Nosepass']
    },
    {
      name: 'Brawly',
      badge: 'Knuckle Badge',
      town: 'Dewford Town',
      specialty: 'Fighting',
      pokemonTeam: ['Machop', 'Makuhita']
    },
    {
      name: 'Wattson',
      badge: 'Dynamo Badge',
      town: 'Mauville City',
      specialty: 'Electric',
      pokemonTeam: ['Magnemite', 'Voltorb', 'Magneton']
    },
    {
      name: 'Flannery',
      badge: 'Heat Badge',
      town: 'Lavaridge Town',
      specialty: 'Fire',
      pokemonTeam: ['Slugma', 'Torkoal']
    },
    {
      name: 'Norman',
      badge: 'Balance Badge',
      town: 'Petalburg City',
      specialty: 'Normal',
      pokemonTeam: ['Slaking', 'Vigoroth']
    },
    {
      name: 'Winona',
      badge: 'Feather Badge',
      town: 'Fortree City',
      specialty: 'Flying',
      pokemonTeam: ['Swellow', 'Pelipper', 'Altaria']
    },
    {
      name: 'Tate and Liza',
      badge: 'Mind Badge',
      town: 'Mossdeep City',
      specialty: 'Psychic',
      pokemonTeam: ['Lunatone', 'Solrock']
    },
    {
      name: 'Wallace',
      badge: 'Rain Badge',
      town: 'Sootopolis City',
      specialty: 'Water',
      pokemonTeam: ['Luvdisc', 'Whiscash', 'Milotic']
    }
    ])

    trainers = this.registry.asReadonly();
}
