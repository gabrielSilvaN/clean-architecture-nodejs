import 'reflect-metadata';
import './database';
import { app } from "./app";

const port = 3333;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})