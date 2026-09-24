import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfoComponent {
  name = input.required<string>();
  age = input.required<number>();
  location = input.required<string>();
  badge = input.required<string>();
  team = input.required<string[]>();
  monologue = input.required<string>();

  showMonologue = output<string>();

  showText = signal<boolean>(false);

  themeColor = input<string>('#0066cc');

  onMonologueClick() {
    this.showText.update((visible) => !visible);
    this.showMonologue.emit(`${this.name()} says: "${this.monologue()}"`);
    
  }
}