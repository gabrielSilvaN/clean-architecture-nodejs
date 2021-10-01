import { ClientData, Client } from "../../entities/client/Client";
import { ClientRepository } from "./repositories/ClientRepository";

export class CreateClient {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  async exec(clientData: ClientData) {
    const client = new Client(clientData);

    const clientAlreadyExists = await this.repository.getClientByEmail(
      client.email
    );

    if (clientAlreadyExists) return new Error("Client already exists");

    return this.repository.createClient(clientData);
  }
}
