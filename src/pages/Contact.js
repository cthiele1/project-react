import "../styles/contact.css";
import Header from "../components/Header";
import ContactPages from "../components/ContactPages";
import Map from "../components/Map";

import React from "react";
const ContactUs = () => {
  return (
    <>
      <Header />;
      <div className="content">
        <div className="title">
          <p>Here are the various ways that you can contact us!</p>
        </div>
        <ContactPages />
        <Map />
      </div>
    </>
  );
};

export default ContactUs;
