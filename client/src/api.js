import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
});

export const getArticles = () => api.get("/articles");

export const getArticle = (id) => api.get(`/articles/${id}`);

export const getCategory = (categoryName) =>
	api.get(`/category/${categoryName}`);
