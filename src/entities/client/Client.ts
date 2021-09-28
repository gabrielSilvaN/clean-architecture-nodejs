import { Email } from "../commom/Email";

export interface ClientData {
  id?: string
  name: string;
  phone: string;
  email: string;
  age: number;
}

export class Client {
  private id?: string;
  private name: string;
  private phone: string;
  private email: Email;
  private age: number;

  constructor({ age, email, name, phone }: ClientData) {
    const isValidAge = this.validateAge(age);

    if (isValidAge) {
      this.age = age;
      this.email = new Email(email);
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
}
