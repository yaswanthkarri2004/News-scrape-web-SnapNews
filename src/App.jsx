import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Headlines from "./components/Headlines";
import Categories from "./components/categories";
import About from "./components/About";

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
      </nav>

      <Routes>
        <Route path="/" element={<Headlines />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
