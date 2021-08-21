import express from "express";
import axios from "axios";
import Article from "../client/src/Components/Article";

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(PORT, () => {
	console.log(`your app is running at http://localhost:${PORT}`);
});
