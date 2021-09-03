import axios from "axios";

const api = axios.create({
	baseURL: "https://localhost:3001",
});

export const getArticles = () => api.get("/articles");

export const getArticle = (id) => api.get("/");
