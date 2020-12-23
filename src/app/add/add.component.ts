import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleService} from '../service/vehicle.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tipo: number;
  config: any;
  vehicleForm: FormGroup;
  message: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));
    this.vehicleForm = this.fb.group({
      targa: ['', Validators.required],
      modello: ['', Validators.required],
      casa: ['', Validators.required],
      anno: ['', Validators.required],

    });
    if (this.tipo === 1){
      this.message = 'Aggiungi Veicolo';
      this.config = {


        campi: ['targa', 'modello', 'casa', 'anno'],
        tipo: 1,
      };
    }
    if (this.tipo === 2){
      this.message = 'Aggiungi Utente';
      this.config = {


        campi: ['nome', 'cognome', 'email', 'password'],
        tipo: 2,
      };
    }
    if (this.tipo === 3){
      this.message = 'Aggiungi Prenotazione';
      this.config = {


        campi: ['dataInizio', 'dataFine'],
        tipo: 3,
      };
    }
  }

}
