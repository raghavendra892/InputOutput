import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdecexamComponent } from './outputdecexam.component';

describe('OutputdecexamComponent', () => {
  let component: OutputdecexamComponent;
  let fixture: ComponentFixture<OutputdecexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputdecexamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputdecexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
