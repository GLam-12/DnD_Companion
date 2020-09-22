import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegPageComponent } from './login-reg-page.component';

describe('LoginRegPageComponent', () => {
  let component: LoginRegPageComponent;
  let fixture: ComponentFixture<LoginRegPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
