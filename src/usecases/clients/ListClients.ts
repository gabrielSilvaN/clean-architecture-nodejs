import { ClientRepository } from "./repositories/ClientRepository";

export class ListClients {
  private readonly repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  async exec() {
    return this.repository.getAllClients();
  }
}
