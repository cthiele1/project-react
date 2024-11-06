import React, { useState, useEffect } from "react";
import "../styles/cooks.css"; // Assuming you have styles for the cook cards
import Header from "../components/Header";
import cooksData from "../json/cooks.json"; // Importing the JSON file

export default function PopularCooks() {
  const [cooks, setCooks] = useState([]);

  useEffect(() => {
    // Set the cooks data from the imported JSON
    setCooks(cooksData);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Header />
      <main>
        <div id="main-heading">
          <h2>These are the main contributors to this website:</h2>
        </div>
        <br />
        <div className="cook-container" id="cooks-section">
          {cooks.length > 0 ? (
            cooks.map((cook) => (
              <div className="cook-card" key={cook._id}>
                <img
                  src={cook.img_name} // Display the image of the cook
                  alt={cook.name}
                  className="cook-image"
                />
                <h3>{cook.name}</h3>
                <p>
                  <strong>Hometown:</strong> {cook.hometown}
                </p>
                <p>
                  <strong>Favorite Recipe:</strong> {cook.favorite_recipe}
                </p>
                <p>
                  <strong>Rating:</strong> {cook.rating} / 5
                </p>
                <p>
                  <strong>Goals:</strong> {cook.goals.join(", ")}
                </p>
              </div>
            ))
          ) : (
            <p>Loading cooks...</p>
          )}
        </div>
      </main>
    </>
  );
}