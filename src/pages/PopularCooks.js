import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/House";
import AddHousePlan from "../components/AddHousePlan";
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/house_plans");
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
