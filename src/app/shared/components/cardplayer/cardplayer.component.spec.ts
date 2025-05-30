import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplayerComponent } from './cardplayer.component';

describe('CardplayerComponent', () => {
  let component: CardplayerComponent;
  let fixture: ComponentFixture<CardplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
