import {MyOrder} from './MyOrder';
import {MyPagination} from './MyPagination';
import {MySearch} from './MySearch';
import {MyTableActionEnum} from './MyTableActionEnum';
import {MyHeaders} from './MyHeaders';

export class ShowUserConfig{
  header: MyHeaders[]= [{
    key: 'id',
    label: 'Id'
  },
    {
      key: 'nome',
      label: 'Nome'
    },
    {
      key: 'cognome',
      label: 'Cognome'
    },

    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'password',
      label: 'Password'
    }];

  orderconfig: MyOrder = {
    defaultColumn: 'id',
    orderType: 'asc',

  };
  pagination: MyPagination = {
    itemPerPage: 5,
    itemPerPageOptions: [3, 5, 10]
  };
  searchconfig: MySearch = {
    columns: ['id', 'nome', 'cognome', 'email', 'password']
  };
  actions: MyTableActionEnum[] = [MyTableActionEnum.NEW_ROW, MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];
  constructor() {

  }
}






