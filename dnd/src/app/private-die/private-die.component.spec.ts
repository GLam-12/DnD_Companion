import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDieComponent } from './private-die.component';

describe('PrivateDieComponent', () => {
  let component: PrivateDieComponent;
  let fixture: ComponentFixture<PrivateDieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
