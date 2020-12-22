import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ParcoAutoComponent} from './parco-auto/parco-auto.component';
import {HandleVehicleComponent} from './handle-vehicle/handle-vehicle.component';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {HandleUserComponent} from './handle-user/handle-user.component';
import {HandleReservationComponent} from './handle-reservation/handle-reservation.component';

const routes: Routes =  [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'parco-auto', component: ParcoAutoComponent},
  {path: 'handle-vehicle', component: HandleVehicleComponent},
  {path: 'add-vehicle', component: AddVehicleComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-reservation', component: AddReservationComponent},
  {path: 'handle-user', component: HandleUserComponent},
  {path: 'handle-reservation', component: HandleReservationComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
