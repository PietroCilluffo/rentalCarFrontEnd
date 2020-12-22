export class Reservation{
  id: number;
  dataInizio: string;
  dataFine: string;
  targa: string;
  idUser: number;
  approvato: string;
  constructor(id,dataInizio,dataFine,targa,idUser){
  this.id =  id;
  this.dataInizio =dataInizio;
  this.dataFine= dataFine;
  this.targa= targa;
  this.idUser=idUser;
  this.approvato = 'NO';
}
}
