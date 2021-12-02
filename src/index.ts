import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import PersonsController from "./controller/persons.controller";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || "";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use("/persons", PersonsController);

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Server running on port ${port}`));
