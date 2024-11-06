import React from "react";
import "../styles/contact.css";

export default function ContactPages() {
  return (
    <>
      <div className="large-box">
        <div className="small-boxes">
          <div className="small-box">
            <h2>Phone Number</h2>
            <p>Cell Number: 124-457-2141</p>
          </div>

          <div className="small-box">
            <h2>Email</h2>
            <p>Gmail: famoussoutherncooking@gmail.com</p>
          </div>

          <div className="small-box">
            <h2>Social Media Handles</h2>
            <p>
              <strong>Instagram:</strong> famous_southern_cooking_recipes
            </p>
            <p>
              <strong>Twitter:</strong> famous-southern-cooking-recipes!!
            </p>
            <p>
              <strong>Facebook:</strong> FAMOUS-SOUTHERN-COOKING-RECIPES!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
