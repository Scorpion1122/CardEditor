import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRuleComponent } from './card-rule.component';

describe('CardRuleComponent', () => {
  let component: CardRuleComponent;
  let fixture: ComponentFixture<CardRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
