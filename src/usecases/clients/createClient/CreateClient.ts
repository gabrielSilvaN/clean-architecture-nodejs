import { ClientData } from "../../../entities/client/Client";
import { ClientRepository } from "../repositories/ClientRepository";

export class CreateClient {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  async handle(client: ClientData) {
    const clientAlreadyExists = await this.repository.getClientByEmail(
      client.email
    );

    if (clientAlreadyExists) return new Error("User already exists");

    return this.repository.createClient(client);
  }
}
