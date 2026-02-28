import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blackmamba } from './blackmamba';

describe('Blackmamba', () => {
  let component: Blackmamba;
  let fixture: ComponentFixture<Blackmamba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blackmamba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blackmamba);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
