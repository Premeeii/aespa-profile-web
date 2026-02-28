import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Karina } from './karina';

describe('Karina', () => {
  let component: Karina;
  let fixture: ComponentFixture<Karina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Karina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Karina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
