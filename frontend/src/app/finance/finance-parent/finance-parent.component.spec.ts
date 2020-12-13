import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceParentComponent } from './finance-parent.component';

describe('FinanceParentComponent', () => {
  let component: FinanceParentComponent;
  let fixture: ComponentFixture<FinanceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
