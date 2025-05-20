import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-d9d7.onrender.com/api",
});

export const fetchArticles = (params) => {
  return api.get("/articles", { params }).then((response) => {
    return response.data.articles;
  });
};
