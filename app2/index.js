"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//@ts-ignore
app.get("/", (req, res) => {
    res.json({
        msg: "app2"
    });
});
app.listen(3001, () => {
    console.log("app2");
});
