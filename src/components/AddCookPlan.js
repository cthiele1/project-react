import "../styles/Dialog.css";
import React, { useState } from "react";

const AddCookPlan = (props) => {
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

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await fetch("http://localhost:3001/api/house_plans", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        setResult("Cook added successfully!");
        props.showNewHouse(await response.json());
        setInputs({});
        event.target.reset();
        props.closeDialog();
      } else {
        setResult("Error adding cook");
      }
    } catch (error) {
      setResult("Network error: Unable to add cook");
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
                  let value = Math.max(
                    1,
                    Math.min(5, parseInt(e.target.value))
                  );
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
                {inputs.img ? (
                  <img
                    id="img-prev"
                    alt="Preview"
                    src={URL.createObjectURL(inputs.img)}
                  />
                ) : (
                  <span>No image selected</span>
                )}
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

export default AddCookPlan;
