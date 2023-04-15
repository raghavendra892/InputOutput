import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecComponent } from './output-dec.component';

describe('OutputDecComponent', () => {
  let component: OutputDecComponent;
  let fixture: ComponentFixture<OutputDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputDecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
