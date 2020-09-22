import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharFormPageComponent } from './char-form-page.component';

describe('CharFormPageComponent', () => {
  let component: CharFormPageComponent;
  let fixture: ComponentFixture<CharFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
