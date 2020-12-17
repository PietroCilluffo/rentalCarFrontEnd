
import {MyHeaders} from './MyHeaders';
import {MyOrder} from './MyOrder';
import {MySearch} from './MySearch';
import {MyPagination} from './MyPagination';
import {MyTableActionEnum} from './MyTableActionEnum';

export class MyTableConfig {
  headers: MyHeaders [];
  order: MyOrder;
  search: MySearch ;
  pagination: MyPagination;
  actions: MyTableActionEnum[];
}
