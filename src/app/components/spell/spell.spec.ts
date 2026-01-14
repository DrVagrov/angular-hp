import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spell } from './spell';

describe('Spell', () => {
  let component: Spell;
  let fixture: ComponentFixture<Spell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
