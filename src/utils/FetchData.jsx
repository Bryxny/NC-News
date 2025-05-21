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

export const patchArticleVote = (article_id, votes) => {
  console.log(article_id, votes);
  return api
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(() => {
      return;
    })
    .catch(console.log);
};

export const postComment = (article_id, body) => {
  console.log(body);
  return api
    .post(`/articles/${article_id}/comments`, body)
    .then((response) => {
      console.log(response);
    })
    .catch(console.log);
};
