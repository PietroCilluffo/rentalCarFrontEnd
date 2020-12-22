import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyButtonConfig} from '../config/MyButtonConfig';

import {UserService} from '../service/user.service';
import {USER} from '../../mock-user';
import {User} from '../../User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  configadd: MyButtonConfig = {
    customCssClass : 'btn btn-primary',
    text: 'aggiungi',
    icon: 'oi oi-plus'
  };
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  submit(): void {

    const values = this.userForm.value;
    const user = new User(8, values.nome, values.cognome, values.email, values.password);

    this.userService.addUser(USER, user);
  }
}
