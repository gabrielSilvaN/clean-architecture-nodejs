export interface ClientData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  age: number;
}

export class Client {
  private id?: string;
  private name: string;
  private phone: string;
  private _email: string;
  private age: number;
  private readonly validateEmailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor({ age, email, name, phone }: ClientData) {
    const isValidAge = this.validateAge(age);
    const isValidEmail = this.validateEmail(email);

    if (isValidAge && isValidEmail) {
      this.age = age;
      this._email = email;
      this.name = name;
      this.phone = phone;
    } else {
      throw new Error("Validation error");
    }
  }

  validateAge(age: Number): boolean {
    if (age < 0) return false;
    return true;
  }

  validateEmail(email: string): boolean {
    return this.validateEmailRegex.test(email);
  }

  get email(): string {
    return this._email;
  }
}
