import React, { useState }  from "react";
import { NavLink,  useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // перевіряємо, чи ми на шляху бронювання
  const isBooking = location.pathname.startsWith("/booking");

  return (
    <header className="header">
      <div className="logo">🎬 CineSphere</div>
      <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={closeMenu} 
        >
          Фільми
        </NavLink>

        <NavLink
          to="/schedule"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={closeMenu}  
        >
          Розклад
        </NavLink>

        <NavLink
          to="/booking/*" 
          className={`nav-link ${isBooking ? "active" : ""}`}
          onClick={closeMenu}  
        >
          Бронювання
        </NavLink>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
