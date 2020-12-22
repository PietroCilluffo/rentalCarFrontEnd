export class User{
  id: number;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  constructor(id,nome,cognome,email,password){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password = password;
}
}
