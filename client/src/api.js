import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
});

export const getArticles = () => api.get("/articles");

export const getArticle = (id) => api.get(`/articles/${id}`);

export const getCategory = (categoryName) =>
	api.get(`/category/${categoryName}`);

export const searchByTitle = (title) => api.get(`/search/${title}`);
// 제목 외에 추가적으로 서치할 키워드 추가?
