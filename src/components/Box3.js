import React from "react";
import "../styles/styles.css";

export default function Box3() {
  return (
    <>
      <div className="img">
        <img
          src="/images/buiscuits.jpeg"
          alt="Biscuits"
          width="300"
          height="150"
        />
        <h4>Biscuits</h4>
        <p>
          {" "}
          Biscuits are a favorite Southern quick bread that takes little time to
          prepare since they don't require yeast or proofing and get their rise
          from baking powder. These fluffy biscuits are great with any meal and
          can be the perfect vessels for sweet or savory fillings.
        </p>
      </div>
    </>
  );
}
