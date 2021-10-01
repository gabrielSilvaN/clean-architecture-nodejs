import { ClientData } from "../../../entities/client/Client";
import { CreateClient } from "../../../usecases/clients/createClient/CreateClient";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { HttpController } from "../protocols/httpController";

export class CreateClientController implements HttpController {
  private createClientUseCase: CreateClient;

  constructor(createClientUseCase: CreateClient) {
    this.createClientUseCase = createClientUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { age, email, name, phone } = httpRequest.body;

    const data: ClientData = {
      age,
      email,
      name,
      phone,
    };

    const result = await this.createClientUseCase.exec(data);

    return {
      statusCode: 200,
      body: result,
    };
  }
}
