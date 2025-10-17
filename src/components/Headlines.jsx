import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import "./Head.css"

function Headlines() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://news-scrape-api.onrender.com";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/news/headlines`)
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
  }, []);

  return (
    <>
    <div>
      <h1>📰 Headlines</h1>
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
    </>
  );
}

export default Headlines;
