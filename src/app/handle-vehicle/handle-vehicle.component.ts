import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vehicle} from '../../Vehicle';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../service/vehicle.service';

@Component({
  selector: 'app-handle-vehicle',
  templateUrl: './handle-vehicle.component.html',
  styleUrls: ['./handle-vehicle.component.css']
})
export class HandleVehicleComponent implements OnInit {
  vehicle: any;
  vehicleForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicle = this.route.snapshot.params;
    this.vehicleForm = this.fb.group({
      targa: [this.vehicle.targa, Validators.required],
      modello: [this.vehicle.modello, Validators.required],
      casa: [this.vehicle.casa, Validators.required],
      anno: [this.vehicle.anno, Validators.required],

    });
    //console.log('sono il veicolo', this.vehicle.id);
    }
   modifica(){
     let v = new Vehicle(this.vehicle.id, this.vehicleForm.value.targa, this.vehicleForm.value.modello, this.vehicleForm.value.casa, this.vehicleForm.value.anno);
     this.vehicleService.updateVehicle(v).subscribe(
       response => console.log('ok')
     );
   }
}
