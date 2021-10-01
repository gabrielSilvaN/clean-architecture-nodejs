import { ClientData } from "../../../entities/client/Client";
import { EntitySchema } from "typeorm";

export const ClientEntity = new EntitySchema<ClientData>({
  name: "client",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
      default: "uuid_generate_v4()",
    },
    age: {
      type: "real",
    },
    email: {
      type: "varchar",
    },
    name: {
      type: "varchar",
    },
    phone: {
      type: "varchar",
    },
  },
});
