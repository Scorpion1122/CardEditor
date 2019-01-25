import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardDetailComponent } from './spell-card-detail.component';

describe('SpellCardDetailComponent', () => {
  let component: SpellCardDetailComponent;
  let fixture: ComponentFixture<SpellCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
