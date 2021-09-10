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

app.get("/category/:categoryName", (req, res) => {
	const { categoryName } = req.params;
	const result = [];
	articles.forEach((article) => {
		if (article.category.includes(categoryName)) {
			result.push(article);
		}
	});
	res.send(result);
});

app.get("/search/:title", (req, res) => {
	const { title } = req.params;
	const result = [];
	articles.forEach((article) => {
		if (article.title.includes(title)) {
			result.push(article);
		}
	});
	res.send(result);
});

export default app;
