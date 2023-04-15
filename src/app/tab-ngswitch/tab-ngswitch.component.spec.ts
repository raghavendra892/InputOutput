import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgswitchComponent } from './tab-ngswitch.component';

describe('TabNgswitchComponent', () => {
  let component: TabNgswitchComponent;
  let fixture: ComponentFixture<TabNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
