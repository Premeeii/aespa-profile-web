import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drama } from './drama';

describe('Drama', () => {
  let component: Drama;
  let fixture: ComponentFixture<Drama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
