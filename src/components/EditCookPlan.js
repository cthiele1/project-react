import React, { useState } from "react";

const EditCookPlan = ({ closeDialog, cookPlan, fetchData }) => {
  const [formData, setFormData] = useState({
    name: cookPlan.name,
    hometown: cookPlan.hometown,
    favorite_recipe: cookPlan.favorite_recipe,
    rating: cookPlan.rating,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://inclass-backend.onrender.com/api/house_plans/${cookPlan._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchData();
        // console.log("succcc")
        closeDialog(); // Close the dialog after successful save
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="edit-dialog">
      <h2>Edit Cook Plan</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Hometown:</label>
        <input
          type="text"
          name="hometown"
          value={formData.hometown}
          onChange={handleChange}
        />

        <label>Favorite Recipe:</label>
        <input
          type="text"
          name="favorite_recipe"
          value={formData.favorite_recipe}
          onChange={handleChange}
        />

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Save</button>
      </form>
      <button type="button" onClick={closeDialog}>
        Cancel
      </button>
    </div>
  );
};

export default EditCookPlan;
