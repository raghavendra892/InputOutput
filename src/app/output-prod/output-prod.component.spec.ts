import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProdComponent } from './output-prod.component';

describe('OutputProdComponent', () => {
  let component: OutputProdComponent;
  let fixture: ComponentFixture<OutputProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
