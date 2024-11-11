import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/admin.css";

const AdminLoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "8be17655-ed74-499a-8721-853078ff57ac");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setResponseMessage("Form received!");
        setMessageClass("message success");
      } else {
        setResponseMessage("Form not received. Please try again.");
        setMessageClass("message error");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
      setMessageClass("message error");
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

          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>

            <button type="submit">Submit Form</button>

            {responseMessage && (
              <div id="responseMessage" className={messageClass}>
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginForm;
