import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { TableComponent } from './table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';
import { HandleVehicleComponent } from './handle-vehicle/handle-vehicle.component';


import { HandleUserComponent } from './handle-user/handle-user.component';
import { HandleReservationComponent } from './handle-reservation/handle-reservation.component';
import { AddComponent } from './add/add.component';
import { AddFormComponent } from './add/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ButtonComponent,
    HomeComponent,
    FilterPipe,
    PaginationPipe,
    TableComponent,
    ParcoAutoComponent,
    HandleVehicleComponent,






    HandleUserComponent,

    HandleReservationComponent,

    AddComponent,

    AddFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NoopAnimationsModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
