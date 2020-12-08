import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomreservationComponent } from './roomreservation.component';

describe('RoomreservationComponent', () => {
  let component: RoomreservationComponent;
  let fixture: ComponentFixture<RoomreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
