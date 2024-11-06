import React from "react";
import "../styles/recipes.css";

export default function Recipe2() {
  return (
    <>
      <section className="column">
        <h3>Southern Fried Green Tomatoes</h3>

        <img
          src="/images/friedtomato.jpg"
          alt="Recipe 2"
          height="200"
          width="200"
        />
        <p>
          While certainly not the only way to enjoy green tomatoes, this is
          simply the most delectable and Southern way to do it. The best fried
          green tomatoes are crispy, lightly coated slices of tangy green
          tomatoes, fried in vegetable oil or bacon grease. Some buttermilk and
          a 50-50 blend of cornmeal and flour is all you need.
        </p>
      </section>
    </>
  );
}
