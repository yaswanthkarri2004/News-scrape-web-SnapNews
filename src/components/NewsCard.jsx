import React, { useState } from "react";
import "./NewsCard.css";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function NewsCard({ news }) {
  // Check if already liked
  const [liked, setLiked] = useState(() => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews")) || [];
    return savedArticles.some(article => article.link === news.link);
  });

  const toggleLike = () => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews")) || [];

    if (liked) {
      // Remove from saved
      const updated = savedArticles.filter(article => article.link !== news.link);
      localStorage.setItem("savedNews", JSON.stringify(updated));
    } else {
      // Add to saved
      savedArticles.push(news);
      localStorage.setItem("savedNews", JSON.stringify(savedArticles));
    }

    setLiked(!liked);
  };

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
        <div className="news-footer">
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            View More
          </a>

          {/* Heart Icon */}
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart-icon ${liked ? "liked" : ""}`}
            onClick={toggleLike}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
