import { HttpRequest, HttpResponse } from "../protocols/http";
import { HttpController } from "../protocols/httpController";

export class ListClientsController implements HttpController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: {
        message: "Teste",
      },
    };
  }
}
