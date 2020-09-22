import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCampaignInfoComponent } from './single-campaign-info.component';

describe('SingleCampaignInfoComponent', () => {
  let component: SingleCampaignInfoComponent;
  let fixture: ComponentFixture<SingleCampaignInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCampaignInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCampaignInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
