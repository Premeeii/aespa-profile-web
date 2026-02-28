import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Armageddon } from './armageddon';

describe('Armageddon', () => {
  let component: Armageddon;
  let fixture: ComponentFixture<Armageddon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Armageddon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Armageddon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
