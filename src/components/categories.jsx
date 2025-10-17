import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./newscard";
import "./Head.css";

function Categories() {
  const [category, setCategory] = useState("entertainment");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://news-scrape-api.onrender.com";

  const categories = [
    "india",
    "world",
    "sports",
    "entertainment",
    "business",
    "health",
    "environment",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/news/${category}`)
      .then((res) => {
        if (Array.isArray(res.data)) setNews(res.data);
        else if (res.data.articles && Array.isArray(res.data.articles))
          setNews(res.data.articles);
        else setNews([]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setNews([]);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h1>📂 Categories</h1>

      <div className="category-select-wrapper">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="loading-text">Loading news...</p>
      ) : news.length === 0 ? (
        <p className="loading-text">No news available.</p>
      ) : (
        <div className="news-grid">
          {news.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
