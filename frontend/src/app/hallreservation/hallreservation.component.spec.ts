import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallreservationComponent } from './hallreservation.component';

describe('HallreservationComponent', () => {
  let component: HallreservationComponent;
  let fixture: ComponentFixture<HallreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
