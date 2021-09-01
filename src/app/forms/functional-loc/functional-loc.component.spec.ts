import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalLocComponent } from './functional-loc.component';

describe('FunctionalLocComponent', () => {
  let component: FunctionalLocComponent;
  let fixture: ComponentFixture<FunctionalLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalLocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
