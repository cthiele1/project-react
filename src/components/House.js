import React from "react";

function House({ name, hometown, favorite_recipe, rating, goals }) {
  return (
    <section className="house">
      <h3>{name}</h3>
      <p>Hometown: {hometown}</p>
      <p>Favorite Recipe: {favorite_recipe}</p>
      <p>Rating: {rating}/5.0</p>
      <p>Service Organization:{goals}</p>
    </section>
  );
}

export default House;
