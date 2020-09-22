import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDieComponent } from './public-die.component';

describe('PublicDieComponent', () => {
  let component: PublicDieComponent;
  let fixture: ComponentFixture<PublicDieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
