import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFormPageComponent } from './monster-form-page.component';

describe('MonsterFormPageComponent', () => {
  let component: MonsterFormPageComponent;
  let fixture: ComponentFixture<MonsterFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
