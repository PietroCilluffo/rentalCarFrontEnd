import {Reservation} from './Reservation';
export const RESERVATION: Reservation[] = [{
  targa: 'CR847NM',
  dataFine: '24/06/2022',
  id: 1,
  dataInizio: '24/06/2002',
  idUser: 1,
  approvato: 'NO',

},
  {
    targa: 'CR848NM',
    id: 2,
    dataInizio: '24/06/2002',

    dataFine: '24/06/2022',
    idUser: 1,
    approvato: 'NO',
  },

  {
    dataInizio: '24/06/2002',
    id: 10,
    targa: 'CR849NM',
    dataFine: '24/06/2022',
    idUser: 1,
    approvato: 'NO',
  },

  {
    targa: 'CR857NM',
    id: 4,
    dataInizio: '24/06/2002',
    dataFine: '24/06/2022',
    idUser: 1,
    approvato: 'NO',
  },
  {
    targa: 'CR858NM',
    id: 5,
    dataInizio: '24/06/2002',
    dataFine: '24/06/2022',
    idUser: 1,
    approvato: 'NO',
  },
  {
    targa: 'CR859NM',
    id: 6,
    dataInizio: '24/06/2002',
    dataFine: '24/06/2022',
    idUser: 2,
    approvato: 'NO',
  },

  {
    targa: 'CR867NM',
    id: 7,
    dataInizio: '24/06/2002',
    dataFine: '24/06/2022',
    idUser: 1,
    approvato: 'NO',

  }];

export function addReservation(RESERVATION, Reservation) : Reservation[]{
  let dataInizio = Reservation.dataInizio;
  let id = Reservation.id;
  let dataFine = Reservation.dataFine;
  let targa = Reservation.targa;
  let idUser = Reservation.idUser;
  let v = {
    targa: targa,
    dataInizio: dataInizio,
    id: id,
    dataFine: dataFine,
    idUser: idUser
  };
  RESERVATION.push(v);

  console.log(RESERVATION);
  return RESERVATION;
}
export function getReservationByIdUser(RESERVATION, idUser) : Reservation[]{
  let data: any[] = [];
  data = RESERVATION.filter((p: any) => p.idUser.toString().includes(idUser));


  console.log(data);
  return data;
}
export function approva( Reservation): any {
  console.log('res',Reservation);
  return;
}
export function updateReservation(Reservation):any {
  console.log('res', Reservation);
  return;
}
export function deleteReservation(Reservation):any{
  console.log('res',Reservation);
  return;
}
