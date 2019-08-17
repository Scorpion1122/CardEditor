import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpaceComponent } from './card-space.component';

describe('CardSpaceComponent', () => {
  let component: CardSpaceComponent;
  let fixture: ComponentFixture<CardSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
