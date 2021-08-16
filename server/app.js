import express from "express";
import axios from "axios";

const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(PORT, () => {
	console.log(`your app is running at http://localhost:${PORT}`);
});
