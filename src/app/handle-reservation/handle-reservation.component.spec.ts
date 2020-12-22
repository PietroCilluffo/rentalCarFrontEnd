import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleReservationComponent } from './handle-reservation.component';

describe('HandleReservationComponent', () => {
  let component: HandleReservationComponent;
  let fixture: ComponentFixture<HandleReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
