"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const data = [
    {
        name: "Prakaksh",
        roll: 101,
    },
    {
        name: "Tushar",
        roll: 102,
    },
];
app.get("/", (req, res) => {
    res.send(data);
});
app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
