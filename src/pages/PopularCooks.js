import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/Cook";
import AddHousePlan from "../components/AddCookPlan";
import DeleteCookPlan from "../components/DeleteCookPlan";
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [cookPlanToDelete, setCookPlanToDelete] = useState(null); // Store the cook plan to delete

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

  const updateHousePlans = (newHousePlan) => {
    setHousePlans((prevHousePlans) => [...prevHousePlans, newHousePlan]);
  };

  // Open the delete dialog and store the cook plan to be deleted
  const openDeleteDialog = (cookPlan) => {
    setCookPlanToDelete(cookPlan);
    setShowDeleteDialog(true);
  };

  // Close the delete dialog
  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
    setCookPlanToDelete(null);
  };

  // Remove the cook plan from the list after deletion
  const removeCookPlanFromList = (id) => {
    setHousePlans((prevHousePlans) =>
      prevHousePlans.filter((plan) => plan._id !== id)
    );
  };

  return (
    <>
      <Header />
      <div id="main-heading">
        <h2>These are the main contributors to this website:</h2>
        <button id="add-house" onClick={openAddDialog}>
          +
        </button>
        {showAddDialog && (
          <AddHousePlan
            closeDialog={closeAddDialog}
            showNewHouse={updateHousePlans}
          />
        )}
      </div>

      {showDeleteDialog && (
        <DeleteCookPlan
          closeDialog={closeDeleteDialog}
          hideCookPlan={removeCookPlanFromList}
          _id={cookPlanToDelete?._id}
        />
      )}

      <br />
      <div className="cook-container">
        {housePlans.map((cookPlan) => (
          <div className="cook-section" key={cookPlan._id}>
            <House
              img_name={cookPlan.img_name}
              name={cookPlan.name}
              hometown={cookPlan.hometown}
              favorite_recipe={cookPlan.favorite_recipe}
              rating={cookPlan.rating}
              goals={cookPlan.goals}
            />
            <button
              className="delete-button"
              onClick={() => openDeleteDialog(cookPlan)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularCooks;
