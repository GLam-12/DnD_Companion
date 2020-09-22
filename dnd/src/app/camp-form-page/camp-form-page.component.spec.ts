import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFormPageComponent } from './camp-form-page.component';

describe('CampFormPageComponent', () => {
  let component: CampFormPageComponent;
  let fixture: ComponentFixture<CampFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
