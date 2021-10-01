import express from "express";
import clientRoutes from "./routes/client.routes";
const app = express();

app.use(express.json());

app.use("/client", clientRoutes);

export { app };
