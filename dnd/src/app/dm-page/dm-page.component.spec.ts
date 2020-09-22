import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmPageComponent } from './dm-page.component';

describe('DmPageComponent', () => {
  let component: DmPageComponent;
  let fixture: ComponentFixture<DmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
