import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharPageComponent } from './char-page.component';

describe('CharPageComponent', () => {
  let component: CharPageComponent;
  let fixture: ComponentFixture<CharPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
