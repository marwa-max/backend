import express from "express";
import { generateToken } from "./generate.js";
import { validateToken } from "./validate.js";
import { decodeToken } from "./decode.js";

const app = express();
app.use(express.json());

app.get("/generate", (req, res) => {
    const token = generateToken();
    res.json({ token });
});

app.post("/validate", (req, res) => {
    const { token } = req.body;
    const valid = validateToken(token);
    res.json({ valid });
});

app.post("/decode", (req, res) => {
    const { token } = req.body;
    const decoded = decodeToken(token);
    res.json(decoded);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});