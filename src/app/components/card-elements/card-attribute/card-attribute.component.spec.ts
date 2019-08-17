import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAttributeComponent } from './card-attribute.component';

describe('CardAttributeComponent', () => {
  let component: CardAttributeComponent;
  let fixture: ComponentFixture<CardAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
