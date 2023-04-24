import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDisplayComponent } from './position-display.component';

describe('PositionDisplayComponent', () => {
  let component: PositionDisplayComponent;
  let fixture: ComponentFixture<PositionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
