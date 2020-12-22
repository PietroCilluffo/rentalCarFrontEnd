import {User} from './User';
import {Vehicle} from './Vehicle';
import {VEHICLE} from './mock-vehicle';
export const USER: User[] = [{
  nome: 'Manuel',
  cognome: 'Tocchi',
  id: 1,
  email: 'Manuel.Tocchi@si2001.it',
  password: 'password'
},
  {
    nome: 'Luigi',
    id: 2,
    cognome: 'Durso',

  email: 'Luigi.Durso@si2001.it',

  password: 'password'
  },

  {
    nome: 'Fabio',
    id: 3,
    cognome: 'Caressa',
    email: 'Fabio.Caressa@erclab.it',
    password: 'password'
  },

  {
    nome: 'Billy',
    id: 4,
    cognome: 'Costacurta',
    email: 'Billy.Costacurta@erclab.it',
  password: 'password'
  },
  {
    nome: 'Ste',
    id: 5,
    cognome: 'De Grandis',
    email: 'Ste.DeGrandis@erclab.it',
    password: 'password'
  },
  {
    nome: 'Sandro',
    id: 6,
    cognome: 'Piccinini',
    email: 'Sandro.Piccinini@erclab.it',
    password: 'password'
  },

  {
    nome: 'Paolo',
    id: 7,
    cognome: 'Di Canio',
    email: 'Paolo.DiCanio@erclab.it',
    password: 'password'

  }];
export function addUser(USER, User) : User[]{
  let nome = User.nome;
  let id = User.id;
  let cognome = User.cognome;
  let email = User.email;
  let password = User.password;
  let v = {
    nome: nome,
    cognome: cognome,
    id: id,
    email: email,
    password: password
  };
  USER.push(v);

  console.log(USER);
  return USER;
}
export function updateUser(v): User[]{
  console.log('aggiornato', v);
  return USER;
}
export function deleteUser(v): User[]{
  console.log('eliminato', v);
  return USER;
}
