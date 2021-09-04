import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
// dummy datas
import articles from "./dummyData/articles";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/articles", (req, res) => {
	res.send(articles);
});

app.get("/articles/:id", (req, res) => {
	const { id } = req.params;
	const result = articles.find((article) => article.id === parseInt(id));
	res.send(result);
});

export default app;
