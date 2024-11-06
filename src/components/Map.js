import React from "react";
import "../styles/contact.css";

export default function ContactPages() {
  return (
    <>
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
    </>
  );
}
