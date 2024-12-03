import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/Cook";
import AddHousePlan from "../components/AddCookPlan";
import DeleteCookPlan from "../components/DeleteCookPlan";
import EditCookPlan from "../components/EditCookPlan"; // Import the EditCookPlan component
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false); // State to show/hide the edit dialog
  const [cookPlanToDelete, setCookPlanToDelete] = useState(null); // Store the cook plan to delete
  const [cookPlanToEdit, setCookPlanToEdit] = useState(null); // Store the cook plan to edit

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

  // Open the edit dialog and store the cook plan to be edited
  const openEditDialog = (cookPlan) => {
    setCookPlanToEdit(cookPlan);
    setShowEditDialog(true);
  };

  // Close the edit dialog
  const closeEditDialog = () => {
    setShowEditDialog(false);
    setCookPlanToEdit(null);
  };

  // Remove the cook plan from the list after deletion
  const removeCookPlanFromList = (id) => {
    setHousePlans((prevHousePlans) =>
      prevHousePlans.filter((plan) => plan._id !== id)
    );
  };

  // Update the cook plan in the list after editing
  const updateCookPlanInList = (updatedCookPlan) => {
    setHousePlans((prevHousePlans) =>
      prevHousePlans.map((plan) =>
        plan._id === updatedCookPlan._id ? updatedCookPlan : plan
      )
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

      {showEditDialog && (
        <EditCookPlan
          closeDialog={closeEditDialog}
          updateCookPlan={updateCookPlanInList}
          cookPlan={cookPlanToEdit}
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
            <button
              className="edit-button" // Edit button for each cook plan
              onClick={() => openEditDialog(cookPlan)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularCooks;
