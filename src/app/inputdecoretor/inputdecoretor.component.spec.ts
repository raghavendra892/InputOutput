import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdecoretorComponent } from './inputdecoretor.component';

describe('InputdecoretorComponent', () => {
  let component: InputdecoretorComponent;
  let fixture: ComponentFixture<InputdecoretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdecoretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdecoretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
