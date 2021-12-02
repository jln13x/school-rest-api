"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_model_1 = __importDefault(require("../models/person.model"));
const router = express_1.default.Router();
router.get("/", async (_, res) => {
    const persons = await person_model_1.default.find({});
    res.status(200).send(persons);
});
router.post("/", async (req, res) => {
    var _a;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.name)) {
        res.status(400).send("Validation failed!");
    }
    const person = new person_model_1.default(req.body);
    await person.save();
    res.status(200).send(person);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const person = await person_model_1.default.findById(id);
    if (!person)
        res.status(404).send("Not found!");
    res.status(200).send(person);
});
exports.default = router;
//# sourceMappingURL=persons.controller.js.map