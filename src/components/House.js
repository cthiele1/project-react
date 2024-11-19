import React from "react";

function House({ name, hometown, favorite_recipe, rating, goals, img_name }) {
  return (
    <section className="house">
      {
        <img
          src={`http://localhost:3001/${img_name}`}
          alt={name}
          className="cook-image"
        />
      }
      <h3>{name}</h3>
      <p>Hometown: {hometown}</p>
      <p>Favorite Recipe: {favorite_recipe}</p>
      <p>Rating: {rating}/5</p>
      <p>Service Organization: {goals}</p>
    </section>
  );
}

export default House;
