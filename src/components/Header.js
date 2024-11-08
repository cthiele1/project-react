import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <nav id="toph-nav" className="htop-nav">
          <h1>Famous Southern Cooking Recipes</h1>
        </nav>
        <div id="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav id="bottomh-nav" className="h-nav">
          <ul className="bold">
            <li>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <h1>About Us</h1>
              </Link>
            </li>
            <li>
              <Link to="/Recipes">
                <h1>Recipes</h1>
              </Link>
            </li>
            <li>
              <Link to="/PopularCooks">
                <h1>Popular Cooks</h1>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <h1>Contact Us</h1>
              </Link>
            </li>
            <li>
              <Link to="/Admin">
                <h1>Admin Page</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
