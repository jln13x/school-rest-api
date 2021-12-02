"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const persons_controller_1 = __importDefault(require("./controller/persons.controller"));
dotenv_1.default.config();
const DATABASE_URL = process.env.DATABASE_URL || "";
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
mongoose_1.default.connect(DATABASE_URL);
const db = mongoose_1.default.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use("/persons", persons_controller_1.default);
const port = process.env.PORT || 3006;
app.listen(port, () => console.log(`Server running on port ${port}`));
//# sourceMappingURL=index.js.map