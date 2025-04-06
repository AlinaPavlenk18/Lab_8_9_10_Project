import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎬 CineSphere</div>
      <nav className="nav">
        <a href="#">Фільми</a>
        <a href="#">Розклад</a>
        <a href="#">Бронювання</a>
      </nav>
    </header>
  );
};

export default Header;
