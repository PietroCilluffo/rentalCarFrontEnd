import {MyOrder} from './MyOrder';
import {MyPagination} from './MyPagination';
import {MySearch} from './MySearch';
import {MyTableActionEnum} from './MyTableActionEnum';
import {MyHeaders} from './MyHeaders';

export class ShowVehicleConfig{
  header: MyHeaders[] = [{
    key: 'id',
    label: 'Id'
  },
    {
      key: 'targa',
      label: 'Targa'
    },
    {
      key: 'modello',
      label: 'Modello'
    },

    {
      key: 'casa',
      label: 'Casa Produttrice'
    },
    {
      key: 'anno',
      label: 'Anno'
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
    columns: ['id', 'targa', 'modello', 'casa', 'anno']
  };
  actions: MyTableActionEnum[] = [MyTableActionEnum.NEW_ROW, MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];
  constructor() {

  }
}






