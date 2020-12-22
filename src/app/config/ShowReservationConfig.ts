import {MyOrder} from './MyOrder';
import {MyPagination} from './MyPagination';
import {MySearch} from './MySearch';
import {MyTableActionEnum} from './MyTableActionEnum';
import {MyHeaders} from './MyHeaders';

export class ShowReservationConfig{
  header: MyHeaders[] = [{
    key: 'id',
    label: 'Id'
  },
    {
      key: 'targa',
      label: 'Targa'
    },
    {
      key: 'dataInizio',
      label: 'Data Inizio'
    },

    {
      key: 'dataFine',
      label: 'Data Fine'
    },
    {
      key: 'approvato',
      label: 'Approvato'
    }
  ];

  orderconfig: MyOrder = {
    defaultColumn: 'id',
    orderType: 'asc',

  };
  pagination: MyPagination = {
    itemPerPage: 5,
    itemPerPageOptions: [3, 5, 10]
  };
  searchconfig: MySearch = {
    columns: ['id', 'targa', 'dataInizio', 'dataFine', 'approvato']
  };
  actions: MyTableActionEnum[] = [MyTableActionEnum.NEW_ROW, MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];
  constructor() {

  }
}






