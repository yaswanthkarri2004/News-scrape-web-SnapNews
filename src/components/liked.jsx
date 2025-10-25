import React, { useEffect } from "react";
import NewsCard from "./newscard";

export default function Liked(){
    let [likedArticles, setLikedArticles] = React.useState([]);

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem("savedNews")) || [];
        setLikedArticles(saved);
    },[]);

    return (
        <div>
            {likedArticles.map((article, index) => (
                <NewsCard key={index} news={article} />
            ))}
        </div>
    )
}