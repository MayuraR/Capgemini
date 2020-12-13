import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIncomeComponent } from './get-income.component';

describe('GetIncomeComponent', () => {
  let component: GetIncomeComponent;
  let fixture: ComponentFixture<GetIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
