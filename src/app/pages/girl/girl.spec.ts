import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Girl } from './girl';

describe('Girl', () => {
  let component: Girl;
  let fixture: ComponentFixture<Girl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Girl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Girl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
