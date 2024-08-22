// Le fichier entity définit un user
export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;

  static countUser: number = 1;

  constructor(firstname: string, lastname: string, email: string) {
    this.id = User.countUser++;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
