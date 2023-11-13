import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminsComponent } from './dashboard-admins.component';

describe('DashboardAdminsComponent', () => {
  let component: DashboardAdminsComponent;
  let fixture: ComponentFixture<DashboardAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminsComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
