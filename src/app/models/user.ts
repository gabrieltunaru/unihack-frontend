import DateTimeFormat = Intl.DateTimeFormat;

export class User {
  public userName: string;
  public email: string;
  public password: string;

  constructor(name: string, email: string, password: string) {
    this.userName = name;
    this.email = email;
    this.password = password;
  }

}

export class TrimmedUser {
  public username: string;
  public password: string;

  constructor(name: string, password: string) {
    this.username = name;
    this.password = password;
  }
}

export class Profile {
  name: string;
  cnp: number;
  department: string;
}
