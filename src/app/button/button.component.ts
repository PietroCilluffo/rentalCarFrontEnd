import { Component, Input, OnInit } from '@angular/core';
import {MyButtonConfig} from '../config/MyButtonConfig';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() mybuttonconfig: MyButtonConfig;
  @Input() ngClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
