import React from "react";
import "./Header.css";

const Header = () => {
  return (
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
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="recipes.html">Recipes</a>
          </li>
          <li>
            <a href="cooks.html">Popular Cooks</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
          <li>
            <a href="admin.html">Admin Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
