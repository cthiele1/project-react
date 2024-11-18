import "../styles/Dialog.css";
import React, { useState } from "react";

const AddHousePlan = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("http://localhost:3001/api/house_plans/", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("House plan added successfully!");
      props.showNewHouse(await response.json());
      event.target.reset();
      props.closeDialog();
    } else {
      setResult("Error adding house plan");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="hometown">Hometown:</label>
              <input
                type="text"
                id="hometown"
                name="hometown"
                required
                value={inputs.hometown || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="favorite_recipe">Favorite Recipe:</label>
              <input
                type="text"
                id="favorite_recipe"
                name="favorite_recipe"
                required
                value={inputs.favorite_recipe || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="rating">Rating (1 to 5):</label>
              <input
                type="number"
                id="rating"
                name="rating"
                required
                value={inputs.rating || ""}
                onChange={(e) => {
                  let value = parseInt(e.target.value);
                  if (value > 5) value = 5;
                  if (value < 1) value = 1;
                  setInputs((values) => ({ ...values, rating: value }));
                }}
                min="1"
                max="5"
              />
              {inputs.rating === 5 && (
                <p style={{ color: "black" }}>This is the max rating!</p>
              )}
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  alt=""
                  src={
                    inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                  }
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHousePlan;
