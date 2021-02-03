import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ParcoAutoComponent} from './parco-auto/parco-auto.component';

import {AddComponent} from './add/add.component';
import {HandleComponent} from './handle/handle.component';

const routes: Routes =  [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'parco-auto', component: ParcoAutoComponent},

  {path: 'add', component: AddComponent},
  {path: 'handle', component: HandleComponent},


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
