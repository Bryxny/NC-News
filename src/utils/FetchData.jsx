import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-d9d7.onrender.com/api",
});

export const fetchArticles = (params) => {
  return api.get("/articles", { params }).then((response) => {
    return response.data.articles;
  });
};

export const fetchArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};
