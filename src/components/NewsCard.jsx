import React from "react";
import "./NewsCard.css";

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img
        src={news.image || "https://via.placeholder.com/250x150"}
        alt={news.title}
        className="news-image"
      />
      <div className="news-content">
        <h2 className="news-title">{news.title}</h2>
        <p className="news-desc">{news.description || "No description available."}</p>
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          View More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
