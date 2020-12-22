import { Component, OnInit } from '@angular/core';
import {MyButtonConfig} from '../config/MyButtonConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  configlogin: MyButtonConfig = {
   customCssClass : 'btn btn-primary',
   text: 'login',
   icon: 'oi oi-account-login'
};
  constructor() { }

  ngOnInit(): void {
  }

}
