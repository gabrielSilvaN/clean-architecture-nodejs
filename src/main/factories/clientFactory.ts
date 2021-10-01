import { CreateClient } from "../../usecases/clients/createClient/CreateClient";
import { CreateClientController } from "../../adapters/controllers/createClient";
import { ListClientsController } from "../../adapters/controllers/listClients";

import { ClientRepositoryTypeorm } from "../../adapters/infra/repositories/ClientRepositoryTypeorm";

export function CreateClientControllerFactory(): CreateClientController {
  const clientRepositoryTypeorm = new ClientRepositoryTypeorm();
  const createClienteUseCase = new CreateClient(clientRepositoryTypeorm);
  const createClienteController = new CreateClientController(
    createClienteUseCase
  );

  return createClienteController;
}

export function ListClientControllerFactory(): ListClientsController {
  const listClientController = new ListClientsController();

  return listClientController;
}
