import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../Vehicle';
import {VehicleService} from '../service/vehicle.service';
import {VEHICLE} from '../../mock-vehicle';
import {MyButtonConfig} from '../config/MyButtonConfig';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
 vehicleForm: FormGroup;
  configadd: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'aggiungi',
    icon: 'oi oi-plus'
  };
  constructor(private vehicleService: VehicleService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      targa: ['', Validators.required],
      modello: ['', Validators.required],
      casa: ['', Validators.required],
      anno: ['', Validators.required],

    });
  }
  submit(): void {

    const values = this.vehicleForm.value;
    const vehicle = new Vehicle(8, values.targa, values.modello, values.casa, values.anno);
    console.log(VEHICLE, vehicle);
    this.vehicleService.addVehicle(VEHICLE, vehicle);
  }
}
