import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrimaryStatsComponent } from './card-primary-stats.component';

describe('CardPrimaryStatsComponent', () => {
  let component: CardPrimaryStatsComponent;
  let fixture: ComponentFixture<CardPrimaryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrimaryStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrimaryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
