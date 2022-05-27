export class Officer {
  name: string;
  title: string;
  email: string;

  constructor(title: string, name: string, email: string = '') {
    this.name = name;
    this.title = title;
    this.email = email;
  }
}