import express from "express";
import Person from "../models/person.model";

const router = express.Router();

router.get("/", async (_, res) => {
  const persons = await Person.find({});
  res.status(200).send(persons);
});

router.post("/", async (req, res) => {
  if (!req.body?.name) {
    res.status(400).send("Validation failed!");
  }

  const person = new Person(req.body);
  await person.save();

  res.status(200).send(person);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const person = await Person.findById(id);

  if (!person) res.status(404).send("Not found!");

  res.status(200).send(person);
});

export default router;
