import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAbilityScoresComponent } from './card-ability-scores.component';

describe('CardAbilityScoresComponent', () => {
  let component: CardAbilityScoresComponent;
  let fixture: ComponentFixture<CardAbilityScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAbilityScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAbilityScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
