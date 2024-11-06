import React, { useState } from "react";
import Header from "../components/Header";

export default function Dinner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      setResponseMessage(result.message || "Form submitted successfully!");
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="box">
          <h1 className="header">Admin Login</h1>
          <p className="text-box">
            This is the admin page for admin users to submit the form to add
            different recipes.
          </p>
          <br />
          <br />
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="8be17655-ed74-499a-8721-853078ff57ac"
            />

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Submit Form</button>
            <div id="responseMessage" className="message">
              {responseMessage}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
