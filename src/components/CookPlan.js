import "../css/CookPlan.css";
import React, { useState } from "react";
import DeleteCookPlan from "./DeleteCookPlan";

const HousePlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [CookPlan, setCookPlan] = useState(props);
  const [showCookPlan, setShowCookPlan] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideCookPlan = () => {
    setCookPlan(false);
  };

  const editCookPlan = (newCookPlan) => {
    setShowCookPlan(newCookPlan);
  };

  return (
    <>
      {showCookPlan ? (
        <div>
          {showDeleteDialog ? (
            <DeleteCookPlan
              closeDialog={closeDeleteDialog}
              hideCookPlan={hideCookPlan}
              name={CookPlan.name}
              _id={CookPlan._id}
            />
          ) : (
            ""
          )}

          {showEditDialog ? (
            <EditCookPlan
              closeDialog={closeEditDialog}
              updateCook={editCookPlan}
              _id={CookPlan._id}
              name={CookPlan.name}
              size={CookPlan.size}
            />
          ) : (
            ""
          )}

          <section className="info">
            <section id="change-buttons">
              <a href="#" onClick={openEditDialog}>
                &#9998;
              </a>
              <a href="#" onClick={openDeleteDialog}>
                &#x2715;
              </a>
            </section>
            <p>Name: {props.name}</p>
            <p>Hometown: {props.hometown}</p>
            <p>Favorite Recipe: {props.favorte_recipe}</p>
            <p>Rating: {props.rating}</p>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;
