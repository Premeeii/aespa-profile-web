import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ningning } from './ningning';

describe('Ningning', () => {
  let component: Ningning;
  let fixture: ComponentFixture<Ningning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ningning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ningning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
