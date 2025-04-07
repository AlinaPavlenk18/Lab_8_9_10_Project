import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ genres, selectedGenre, onGenreChange, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>🎞️ Жанри</h3>
      <ul>
        {genres.map((g) => (
          <li
            key={g}
            className={g === selectedGenre ? "active" : ""}
            onClick={() => onGenreChange(g)}
          >
            {g}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;