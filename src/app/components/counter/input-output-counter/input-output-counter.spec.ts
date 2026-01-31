import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCounter } from './input-output-counter';

describe('InputOutputCounter', () => {
  let component: InputOutputCounter;
  let fixture: ComponentFixture<InputOutputCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
