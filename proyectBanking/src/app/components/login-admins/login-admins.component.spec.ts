import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminsComponent } from './login-admins.component';

describe('LoginAdminsComponent', () => {
  let component: LoginAdminsComponent;
  let fixture: ComponentFixture<LoginAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminsComponent]
    });
    fixture = TestBed.createComponent(LoginAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
