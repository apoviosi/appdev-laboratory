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
  selector: 'app-johto-region',
  standalone: true,
  imports: [LeaderInfoComponent],
  styleUrl: './johto-region.css',
  templateUrl: './johto-region.html',
})
export class JohtoRegion {
  activeMonologue = signal<string>('Click a leader\'s monologue button to view their quote.');

  johtoGymLeaders = signal<GymLeader[]>([
    { 
      name: "Falkner", 
      age: 19, 
      location: "Violet City", 
      badge: "Zephyr Badge", 
      team: ["Pidgey (Lv. 7)", "Pidgeotto (Lv. 9)"],
      monologue: "I am a Bird Enjoyer" 
    },
    { 
      name: "Bugsy", 
      age: 14, 
      location: "Azalea Town", 
      badge: "Hive Badge", 
      team: ["Metapod (Lv. 14)", "Scyther (Lv. 16)"],
      monologue: "I am a Bug Enjoyer" 
    },
    { 
      name: "Whitney", 
      age: 18, 
      location: "Goldenrod City", 
      badge: "Plain Badge", 
      team: ["Clefairy (Lv. 17)", "Miltank (Lv. 19)"],
      monologue: "I am Cute Enjoyer" 
    },
    { 
      name: "Morty", 
      age: 23, 
      location: "Ecruteak City", 
      badge: "Fog Badge", 
      team: ["Haunter (Lv. 21)", "Gengar (Lv. 25)"],
      monologue: "I am a Ghost Enjoyer" 
    },
    { 
      name: "Jasmine", 
      age: 20, 
      location: "Olivine City", 
      badge: "Mineral Badge", 
      team: ["Magnemite (Lv. 30)", "Steelix (Lv. 35)"],
      monologue: "I am a Metal Enjoyer" 
    },
    { 
      name: "Pryce", 
      age: 70, 
      location: "Mahogany Town", 
      badge: "Glacier Badge", 
      team: ["Seel (Lv. 30)", "Piloswine (Lv. 34)"],
      monologue: "I am old." 
    },
    { 
      name: "Clair", 
      age: 24, 
      location: "Blackthorn City", 
      badge: "Rising Badge", 
      team: ["Dragonair (Lv. 38)", "Kingdra (Lv. 41)"],
      monologue: "I am a Dragon Enjoyer" 
    },
    { 
      name: "Chuck", 
      age: 40, 
      location: "Cianwood City", 
      badge: "Storm Badge", 
      team: ["Primeape (Lv. 29)", "Poliwrath (Lv. 31)"],
      monologue: "I am Middle-aged pushing 50." 
}
    
  ]);

  displayMonologue(message: string) {
    this.activeMonologue.set(message);
  }
}