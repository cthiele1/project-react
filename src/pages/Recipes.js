import "../styles/recipes.css";
import Header from "../components/Header";
import React from "react";
import Recipe1 from "../components/Recipe1";
import Recipe2 from "../components/Recipe2";
import Recipe3 from "../components/Recipe3";
import Recipe4 from "../components/Recipe4";
import Recipe5 from "../components/Recipe5";

export default function Recipes() {
  return (
    <>
      <Header />;
      <main id="main-content">
        <div id="assignment-section">
          <h2 id="Assignments" className="flex container">
            <div id="container">
              <Recipe1 />
              <Recipe2 />
              <Recipe3 />
              <Recipe4 />
              <Recipe5 />
            </div>
          </h2>
        </div>
      </main>
    </>
  );
}
