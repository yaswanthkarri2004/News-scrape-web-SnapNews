// src/utils/localStorage.js

export const saveArticle = (article) => {
  const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
  
  if (!saved.some(a => a.url === article.url)) {
    saved.push(article);
    localStorage.setItem("savedNews", JSON.stringify(saved));
  }
};

export const isArticleSaved = (url) => {
  const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
  return saved.some(a => a.url === url);
};

export const removeArticle = (url) => {
  const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
  const filtered = saved.filter(a => a.url !== url);
  localStorage.setItem("savedNews", JSON.stringify(filtered));
};
