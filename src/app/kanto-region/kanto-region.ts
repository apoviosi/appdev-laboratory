import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info';

export interface GymLeader {
  name: string;
  age: number;
  location: string;
  badge: string;
  team: string[];
  monologue: string;
}

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [LeaderInfoComponent],
  styleUrl: './kanto-region.css',
  templateUrl: './kanto-region.html',
})
export class KantoRegion {
  kantoGymLeaders = signal<GymLeader[]>([
    { 
      name: "Brock", 
      age: 15, 
      location: "Pewter City", 
      badge: "Boulder Badge", 
      team: ["Geodude (Lv. 12)", "Onix (Lv. 14)"],
      monologue: "My rock-hard willpower is Hard." 
    },
    { 
      name: "Misty", 
      age: 12, 
      location: "Cerulean City", 
      badge: "Cascade Badge", 
      team: ["Staryu (Lv. 18)", "Starmie (Lv. 21)"],
      monologue: "Fishge" 
    },
    { 
      name: "Lt. Surge", 
      age: 33, 
      location: "Vermilion City", 
      badge: "Thunder Badge", 
      team: ["Voltorb (Lv. 21)", "Raichu (Lv. 24)"],
      monologue: "I like Tasing pokemons" 
    },
    { 
      name: "Erika", 
      age: 21, 
      location: "Celadon City", 
      badge: "Rainbow Badge", 
      team: ["Victreebel (Lv. 29)", "Vileplume (Lv. 29)"],
      monologue: "I am a beauty Elitist" 
    },
    { 
      name: "Koga", 
      age: 42, 
      location: "Fuchsia City", 
      badge: "Soul Badge", 
      team: ["Muk (Lv. 37)", "Weezing (Lv. 39)"],
      monologue: "I like smoking buds." 
    },
    { 
      name: "Sabrina", 
      age: 21, 
      location: "Saffron City", 
      badge: "Marsh Badge", 
      team: ["Kadabra (Lv. 38)", "Alakazam (Lv. 43)"],
      monologue: "I shall controll your mind" 
    },
    { 
      name: "Blaine", 
      age: 58, 
      location: "Cinnabar Island", 
      badge: "Volcano Badge", 
      team: ["Rapidash (Lv. 42)", "Arcanine (Lv. 45)"],
      monologue: "FAI - YAAH" 
    },
    { 
      name: "Giovanni", 
      age: 44, 
      location: "Viridian City", 
      badge: "Earth Badge", 
      team: ["Rhydon (Lv. 45)", "Nidoking (Lv. 45)"],
      monologue: "Pokemon Trafficing Ring Leader" 
    }
  ]);

  displayMonologue(message: string) {
    console.log(message);
  }
}