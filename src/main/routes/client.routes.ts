import { Router } from "express";
import {
  CreateClientControllerFactory,
  ListClientControllerFactory,
} from "../factories/clientFactory";

const routes = Router();

routes.post("/", async (req, res) => {
    const {statusCode, body} = await CreateClientControllerFactory().handle(req);
    return res.status(statusCode).json(body);
});

routes.get("/", async (req, res) => {
  const { statusCode, body } = await ListClientControllerFactory().handle(req);
  return res.status(statusCode).json(body);
});

export default routes;
