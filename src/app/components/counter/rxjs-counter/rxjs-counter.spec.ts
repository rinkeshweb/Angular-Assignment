import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCounter } from './rxjs-counter';

describe('RxjsCounter', () => {
  let component: RxjsCounter;
  let fixture: ComponentFixture<RxjsCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsCounter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RxjsCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
