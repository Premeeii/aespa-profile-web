import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savage } from './savage';

describe('Savage', () => {
  let component: Savage;
  let fixture: ComponentFixture<Savage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Savage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Savage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
