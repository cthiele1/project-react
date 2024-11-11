import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/House";
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://inclass-backend.onrender.com/api/house_plans"
      );
      setHousePlans(response.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <div id="main-heading">
        <h2>These are the main contributors to this website:</h2>
      </div>
      <br />
      <div className="cook-container">
        {housePlans.map((housePlan, index) => {
          return (
            <div className="cook-section" key={index}>
              <House
                img_name={`cook${index + 1}.jpg`}
                name={housePlan.name}
                hometown={housePlan.hometown}
                favorite_recipe={housePlan.favorite_recipe}
                rating={housePlan.rating}
                goals={housePlan.goals}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularCooks;
