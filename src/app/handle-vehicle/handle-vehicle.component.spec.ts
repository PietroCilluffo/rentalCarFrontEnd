import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleVehicleComponent } from './handle-vehicle.component';

describe('HandleVehicleComponent', () => {
  let component: HandleVehicleComponent;
  let fixture: ComponentFixture<HandleVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
