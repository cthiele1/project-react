import "../styles/contact.css";
import Header from "../components/Header";
import React from "react";
const ContactUs = () => {
  return (
    <>
      <Header />;
      <div className="content">
        <div className="title">
          <p>Here are the various ways that you can contact us!</p>
        </div>

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

        <div className="contact-container">
          <div className="contact-form">
            <h2>Never Miss Anything!</h2>
            <h3>Sign up for our email chain:</h3>
            <form action="submit_form.php" method="POST">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </form>
          </div>

          <div className="business-hours">
            <h2>Business Hours</h2>
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
            </p>
            <p>
              <strong>Saturday:</strong> 9:00 AM - 4:00 PM
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>

        <div className="map">
          <h2>Find Us Here:</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345085693!2d144.95373531531568!3d-37.81720997975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0d1c37%3A0xf9d4d61b5f8e491f!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1601567896237!5m2!1sen!2sau"
              width="600"
              height="450"
              title="Google Map Location"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
