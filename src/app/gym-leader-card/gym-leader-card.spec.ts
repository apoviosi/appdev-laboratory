import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymLeaderCard } from './gym-leader-card';

describe('GymLeaderCard', () => {
  let component: GymLeaderCard;
  let fixture: ComponentFixture<GymLeaderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymLeaderCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLeaderCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
