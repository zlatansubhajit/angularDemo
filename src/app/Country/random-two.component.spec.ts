import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTwoComponent } from './random-two.component';

describe('RandomTwoComponent', () => {
  let component: RandomTwoComponent;
  let fixture: ComponentFixture<RandomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
