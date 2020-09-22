import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampPageComponent } from './camp-page.component';

describe('CampPageComponent', () => {
  let component: CampPageComponent;
  let fixture: ComponentFixture<CampPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
