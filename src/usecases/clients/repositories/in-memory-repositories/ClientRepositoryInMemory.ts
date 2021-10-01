import { ClientData } from "../../../../entities/client/Client";
import { ClientRepository } from "../ClientRepository";

export class ClientRepositoryInMemory implements ClientRepository {
  private clients: ClientData[] = [];

  async createClient(client: ClientData): Promise<ClientData> {
    const newUser: ClientData = {
      ...client,
      id: Date.now.toString(),
    };

    this.clients.push(client);

    return newUser;
  }

  async getClient(id: string): Promise<ClientData | undefined> {
    const findedUser = this.clients.find((client) => client.id === id);

    return findedUser;
  }

  async updateClient(clientToUpdate: ClientData): Promise<ClientData> {
    const newClientList = this.clients.map((client) => {
      if (client.id === clientToUpdate.id) {
        return {
          ...client,
          ...clientToUpdate,
        };
      }

      return client;
    });

    this.clients = newClientList;

    return clientToUpdate;
  }

  async deleteClient(id: string): Promise<void> {
    const findedClient = await this.getClient(id);

    if (findedClient)
      this.clients = this.clients.filter((client) => client.id !== id);
  }

  async getAllClients(): Promise<ClientData[]> {
    return this.clients;
  }

  async getClientByEmail(email: string): Promise<ClientData | undefined> {
    const findedClient = this.clients.find((client) => client.email === email);

    return findedClient;
  }
}
