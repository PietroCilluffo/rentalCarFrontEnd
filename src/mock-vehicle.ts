import {Vehicle} from './Vehicle';
export let  VEHICLE: Vehicle[] = [{
  targa: 'CR849NM',
  modello: 'Focus',
  id: 1,
  anno: '2004',
  casa: 'Ford',


},
  {
    targa: 'CR857NM',
    modello: 'Mustang',
    id: 2,
    anno: '2005',
    casa: 'Ford'
  },

  {
    targa: 'CR858NM',
    modello: 'Skyline',
    id: 3,
    anno: '2006',
    casa: 'Nissan'
  },

  {
    targa: 'CR847NM',
    modello: 'Skyline',
    id: 4,
    anno: '2006',
    casa: 'Nissan'
  },
  {
    targa: 'CR867NM',
    modello: 'Supra',
    id: 5,
    anno: '2008',
    casa: 'Toyota'
  },
  {
    targa: 'CR859NM',
    modello: 'Golf GTI',
    id: 6,
    anno: '2008',
    casa: 'Volkswagen'
  },

  {
    targa: 'CR899NM',
    modello: 'Uno TURBO',
    id: 7,
    anno: '1994',
    casa: 'Fiat'

  }];
export function addVehicle(VEHICLE, Vehicle) : Vehicle[]{
  let targa = Vehicle.targa;
  let id = Vehicle.id;
  let anno = Vehicle.anno;
  let casa = Vehicle.casa;
  let modello = Vehicle.modello;
  let v = {
    targa: targa,
    modello: modello,
    id: id,
    anno: anno,
    casa: casa
  };
  VEHICLE.push(v);

  console.log(VEHICLE);
  return VEHICLE;
}
export function updateVehicle(v): Vehicle[]{
  console.log('aggiornato', v);
  return VEHICLE;
}
export function deleteVehicle(v): Vehicle[]{
  console.log('eliminato', v);
  return VEHICLE;
}
export function getVehicleById(id): any {

  let number = Number (id);
  let  v = VEHICLE.filter(
    vehicle => vehicle.id === number);

  return v;
}
