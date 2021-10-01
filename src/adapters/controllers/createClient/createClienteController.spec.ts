import { CreateClient } from "../../../usecases/clients/CreateClient";
import { HttpRequest } from "../protocols/http";

describe("Create Client Controller", () => {
  it("should be throw a new error", () => {
    const httpRequest: HttpRequest = {
      body: {
        age: -1,
        email: "gabriel@teste.com",
        name: "Gabriel",
        phone: "62992375853",
      },
    };

    // const createClienteController = new CreateClient()
  });
});
