import { Component, inject } from '@angular/core';
import { HoennService } from '../services/hoenn';

@Component({
  selector: 'app-hoenn-region',
  standalone: true,
  templateUrl: './hoenn-region.html',
  styleUrls: ['./hoenn-region.css']
})
export class HoennRegionComponent {
  hoennService = inject(HoennService);
}