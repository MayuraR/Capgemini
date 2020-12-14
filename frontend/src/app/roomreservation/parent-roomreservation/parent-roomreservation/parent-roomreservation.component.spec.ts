import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRoomreservationComponent } from './parent-roomreservation.component';

describe('ParentRoomreservationComponent', () => {
  let component: ParentRoomreservationComponent;
  let fixture: ComponentFixture<ParentRoomreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRoomreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRoomreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
