import React from "react";
import "../styles/styles.css";

export default function Box1() {
  return (
    <>
      <div className="img">
        <img
          src="/images/maccheese.jpeg"
          alt="Mac and Cheese"
          width="300"
          height="150"
        />
        <h4>Mac and Cheese</h4>
        <p>
          {" "}
          This recipe for Southern-style mac and cheese is baked rather than
          made on the stovetop, meaning you can easily slice portions to serve.
          The combination of cheddar, mozzarella and gouda cheeses is accented
          by mustard and Cajun seasonings for a nice kick.{" "}
        </p>
      </div>
    </>
  );
}
