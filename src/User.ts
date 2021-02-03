export class User{
  id: number;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  tipo:string;
  constructor(id,nome,cognome,email,password,tipo){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password = password;
    this.tipo = tipo;
}
}
