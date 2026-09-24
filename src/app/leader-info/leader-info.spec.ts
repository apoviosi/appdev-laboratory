import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderInfoComponent } from './leader-info';

describe('LeaderInfoComponent', () => {
  let component: LeaderInfoComponent;
  let fixture: ComponentFixture<LeaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});