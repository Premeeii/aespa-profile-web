import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giselle } from './giselle';

describe('Giselle', () => {
  let component: Giselle;
  let fixture: ComponentFixture<Giselle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giselle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giselle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
