import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-d9d7.onrender.com/api",
});

export const fetchArticles = ({ article_id, ...queryParams }) => {
  const endpoint = article_id ? `/articles/${article_id}` : "/articles";
  return api.get(endpoint, { params: queryParams }).then((response) => {
    return article_id ? response.data.article : response.data.articles;
  });
};

export const fetchComments = ({ article_id, ...queryParams }) => {
  return api
    .get(`/articles/${article_id}/comments`, { params: queryParams })
    .then((response) => response.data.comments);
};

export const patchArticleVote = (article_id, votes) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const postComment = (article_id, body) => {
  return api
    .post(`/articles/${article_id}/comments`, body)
    .then((res) => res.data.comment);
};

export const fetchUser = ({ username }) => {
  return api.get(`/users/${username}`).then((response) => response.data.user);
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const fetchTopics = () => {
  return api.get("/topics").then((response) => response.data.topics);
};

export const fetchUsers = () => {
  return api.get("/users").then((response) => response.data.users);
};

export const postArticle = (body) => {
  return api.post("/articles", body).then((res) => res.data.article);
};

export const deleteArticle = (article_id) => {
  return api.delete(`/articles/${article_id}`);
};
