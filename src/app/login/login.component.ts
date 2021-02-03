import { Component, OnInit } from '@angular/core';
import {MyButtonConfig} from '../config/MyButtonConfig';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {ok} from 'assert';
import {Router} from '@angular/router';

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
  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService , private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  login(): void {
    console.log(this.form.value.email + this.form.value.password);
    this.auth.authenticate(this.form.value.email, this.form.value.password).subscribe(
      response => {

      }
    );
  }
}
