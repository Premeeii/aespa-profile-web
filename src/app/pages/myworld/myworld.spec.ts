import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myworld } from './myworld';

describe('Myworld', () => {
  let component: Myworld;
  let fixture: ComponentFixture<Myworld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myworld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myworld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
