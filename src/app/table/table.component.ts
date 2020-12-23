import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MyTableConfig} from '../config/MyTableConfig';
import {orderBy} from 'lodash';
import * as _ from 'lodash';
import {GestRighe} from '../config/GestRighe';
import {MyButtonConfig} from '../config/MyButtonConfig';
declare var $: any;


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input () tableConfig: MyTableConfig ;
  @Input () data: any [];
  @Output() operation = new EventEmitter<string>();
  @Input()  gestRighe: MyButtonConfig[];
  @Output() opRiga = new EventEmitter<any>();
  orderType: string;
  icon: string;
  key: string;
  value: string;
  selectedFilter: string;
  searched: string;
  selectedPage: number;
  perPage: number;
  tempOP: string;
  tempOB: any;
  constructor() { }

  ngOnInit(): void {
    this.perPage = this.tableConfig.pagination.itemPerPage;
    this.selectedPage = 0;
    this.selectedFilter = '';
    this.searched = '';
    this.orderType = this.tableConfig.order.orderType;
    if (this.tableConfig.order.orderType === 'asc'){
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['asc']);
      this.orderType = 'asc';

      this.icon = 'arrow_drop_down';

    }else{
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['desc']);
      this.orderType = 'desc';
      this.icon = 'arrow_drop_up';


    }


  }
  ordina(key: string) {

    if(this.orderType === 'desc'){
      this.data = _.orderBy(this.data, [key], ['asc']);
      this.orderType = 'asc';
      this.icon = 'arrow_drop_down';

    }else{
      this.data = _.orderBy(this.data, [key], ['desc']);
      this.icon = 'arrow_drop_up';
      this.orderType = 'desc';

    }

  }
  op(operation: string) {
    this.operation.emit(operation);
  }
  opSuRiga(opriga: any, object: any) {

      this.tempOB = object;
      this.tempOP = opriga.text;
      if (opriga.ref){
        $(opriga.ref).modal('show');
      }else{
        this.opRiga.emit({text: opriga.text, obj: object});
      }

  }

  salva(opriga: string, object: any){
    opriga = this.tempOP;
    object = this.tempOB;


    this.opRiga.emit({opriga, object});
    $("#gestEl").modal('hide');
  }
}




