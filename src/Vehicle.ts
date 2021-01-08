export class Vehicle{
  id: number;
  targa: string;
  modello: string;
  casa: string;
  anno: string;
  constructor(id, targa, modello, casa, anno){
    this.id = id;
    this.targa = targa;
    this.modello = modello;
    this.casa = casa;
    this.anno = anno;
  }

}
