export class Reservation{
  id: number;
  dataInizio: string;
  dataFine: string;
  targa: string;
  idUser: number;
  approvazione: string;
  constructor(id,dataInizio,dataFine,targa,idUser,approvazione){
  this.id =  id;
  this.dataInizio =dataInizio;
  this.dataFine= dataFine;
  this.targa= targa;
  this.idUser=idUser;
  this.approvazione = approvazione;
}

}
