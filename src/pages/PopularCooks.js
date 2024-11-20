import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/Cook";
import AddHousePlan from "../components/AddCookPlan";
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://inclass-backend.onrender.com/api/house_plans"
      );
      setHousePlans(response.data);
    })();
  }, []);

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  const updateHousePlans = (housePlan) => {
    setHousePlans((houses) => [...houses, housePlan]);
  };

  return (
    <>
      <Header />
      <div id="main-heading">
        <h2>These are the main contributors to this website:</h2>
        <button id="add-house" onClick={openAddDialog}>
          +
        </button>
        {showAddDialog ? (
          <AddHousePlan
            closeDialog={closeAddDialog}
            showNewHouse={updateHousePlans}
          />
        ) : (
          ""
        )}
      </div>

      <br />
      <div className="cook-container">
        {housePlans.map((cookPlan, index) => {
          return (
            <div className="cook-section" key={index}>
              <House
                img_name={cookPlan.img_name}
                name={cookPlan.name}
                hometown={cookPlan.hometown}
                favorite_recipe={cookPlan.favorite_recipe}
                rating={cookPlan.rating}
                goals={cookPlan.goals}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularCooks;
