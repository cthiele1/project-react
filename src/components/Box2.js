import React from "react";
import "../styles/styles.css";

export default function Box2() {
  return (
    <>
      <div className="img">
        <img
          src="/images/pecanpie.jpeg"
          alt="Pecan Pie"
          width="300"
          height="150"
        />
        <h4>Pecan Pie</h4>
        <p>
          Pecan trees grow wild throughout much of the Southern United States,
          and the trees' nuts feature in many local specialties. This iconic
          Southern pie makes use of these sweet nuts that form a crunchy crust
          over a layer of ooey-gooey filling.{" "}
        </p>
      </div>
    </>
  );
}
