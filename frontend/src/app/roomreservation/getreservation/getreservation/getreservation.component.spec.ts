import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreservationComponent } from './getreservation.component';

describe('GetreservationComponent', () => {
  let component: GetreservationComponent;
  let fixture: ComponentFixture<GetreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
