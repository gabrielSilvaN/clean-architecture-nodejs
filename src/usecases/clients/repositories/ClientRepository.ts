import { ClientData } from "../../../entities/client/Client";

export interface ClientRepository {
  createClient: (client: ClientData) => Promise<ClientData>;
  getClient: (id: string) => Promise<ClientData | undefined>;
  getClientByEmail: (email: string) => Promise<ClientData | undefined>;
  updateClient: (clientToUpdate: ClientData) => Promise<ClientData>;
  deleteClient: (id: string) => Promise<void>;
  getAllClients: () => Promise<ClientData[]>;
}
