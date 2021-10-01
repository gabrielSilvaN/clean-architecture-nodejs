import { ClientData } from "entities/client/Client";
import { getRepository, Repository } from "typeorm";
import { ClientRepository } from "../../../usecases/clients/repositories/ClientRepository";
import { ClientEntity } from "../models/ClientModel";

export class ClientRepositoryTypeorm implements ClientRepository {
  private repository: Repository<ClientData>;

  constructor() {
    this.repository = getRepository(ClientEntity);
  }

  async createClient(client: ClientData): Promise<ClientData> {
    return this.repository.save(client);
  }

  getClient(id: string): Promise<ClientData | undefined> {
    return this.repository.findOne(id);
  }

  getClientByEmail(email: string): Promise<ClientData | undefined> {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async updateClient(clientToUpdate: ClientData): Promise<ClientData> {
    if (!clientToUpdate.id) throw new Error("Param missing");

    const client = await this.repository.findOne(clientToUpdate.id);

    return this.repository.save({ ...clientToUpdate });
  }

  async deleteClient(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  getAllClients(): Promise<ClientData[]> {
    return this.repository.find();
  }
}
