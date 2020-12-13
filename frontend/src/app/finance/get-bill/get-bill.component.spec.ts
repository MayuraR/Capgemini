import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBillComponent } from './get-bill.component';

describe('GetBillComponent', () => {
  let component: GetBillComponent;
  let fixture: ComponentFixture<GetBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
