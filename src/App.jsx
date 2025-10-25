import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Headlines from "./components/Headlines";
import Categories from "./components/categories";
import About from "./components/About";
import Liked from "./components/liked";

function App() {
  return (
    <>
    
    <div className="app-container">
     <div className="head"><b>SwapNews</b>
     </div> 
      <nav className="navbar">
        <Link to="/">Headlines</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about" className="about-link">About</Link>
        <Link to="/Liked" className="about-link">Liked</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Headlines />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/Liked" element={<Liked/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
