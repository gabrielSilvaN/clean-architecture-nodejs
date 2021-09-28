import { Client, ClientData } from "./Client";

describe("Client", () => {
  it("should be throw new error", () => {
    const data: ClientData = {
      age: 24,
      email: "gabrielgmail.com",
      name: "Gabriel",
      phone: "9962995454",
    };

    expect(() => {
      new Client(data);
    }).toThrow("Validation error");
  });

  it("should be create a new client", () => {
    const data: ClientData = {
      age: 24,
      email: "gabriel@gmail.com",
      name: "Gabriel",
      phone: "9962995454",
    };

    expect(new Client(data)).toHaveProperty("email");
  });

  it("should be throw new error if no valid age is provided", () => {
    const data: ClientData = {
      age: -1,
      email: "gabrielgmail.com",
      name: "Gabriel",
      phone: "9962995454",
    };

    expect(() => {
      new Client(data);
    }).toThrow("Validation error");
  });
});
