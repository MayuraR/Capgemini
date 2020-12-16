import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRateComponent } from './set-rate.component';

describe('SetRateComponent', () => {
  let component: SetRateComponent;
  let fixture: ComponentFixture<SetRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
