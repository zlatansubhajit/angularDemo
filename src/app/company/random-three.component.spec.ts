import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomThreeComponent } from './random-three.component';

describe('RandomThreeComponent', () => {
  let component: RandomThreeComponent;
  let fixture: ComponentFixture<RandomThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
