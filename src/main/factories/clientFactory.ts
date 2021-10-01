import { CreateClient } from "../../usecases/clients/CreateClient";
import { CreateClientController } from "../../adapters/controllers/createClient";
import { ListClientsController } from "../../adapters/controllers/listClients";

import { ClientRepositoryTypeorm } from "../../adapters/infra/repositories/ClientRepositoryTypeorm";
import { ListClients } from "../../usecases/clients/ListClients";

export function CreateClientControllerFactory(): CreateClientController {
  const clientRepositoryTypeorm = new ClientRepositoryTypeorm();
  const createClienteUseCase = new CreateClient(clientRepositoryTypeorm);
  const createClienteController = new CreateClientController(
    createClienteUseCase
  );

  return createClienteController;
}

export function ListClientControllerFactory(): ListClientsController {
  const clientRepositoryTypeorm = new ClientRepositoryTypeorm();
  const listClientsUseCase = new ListClients(clientRepositoryTypeorm);
  const listClientController = new ListClientsController(listClientsUseCase);

  return listClientController;
}
