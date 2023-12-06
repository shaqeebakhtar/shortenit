import express, { type Express } from "express";
import { router } from "./routes";
import { connectDb } from "./lib/db";
import { PORT } from "./config";

const port = PORT || 8000;

const app: Express = express();

app.use(express.json());

app.use("/api", router);

connectDb();

app.listen(port, () => console.log(`🚀 Server running at PORT: ${port}`));
