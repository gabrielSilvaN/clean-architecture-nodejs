import { ListClients } from "usecases/clients/ListClients";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { HttpController } from "../protocols/httpController";

export class ListClientsController implements HttpController {
  private readonly listClientsUseCase: ListClients;

  constructor(listClientsUseCase: ListClients) {
    this.listClientsUseCase = listClientsUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const result = await this.listClientsUseCase.exec();

    return {
      statusCode: 200,
      body: result,
    };
  }
}
