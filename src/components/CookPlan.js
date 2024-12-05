import "../css/CookPlan.css";
import React, { useState, useEffect } from "react";
import DeleteCookPlan from "./DeleteCookPlan";
import EditCookPlan from "./EditCookPlan";
const HousePlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [CookPlan, setCookPlan] = useState(props);
  const [showCookPlan, setShowCookPlan] = useState(true);

  //wait until after page is rendered to do the asyncronous loading
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://inclass-backend.onrender.com/api/house_plans/"
      );
      setCooks(response.data);
    })();
  }, []);

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
              name="Feajgoe"
              id="9"
            />
          ) : (
            ""
          )}
          {showEditDialog ? (
            <EditCookPlan
              closeDialog={closeEditDialog}
              updateCook={editCookPlan}
              id={CookPlan.id}
              name={CookPlan.name}
              size={CookPlan.size}
            />
          ) : (
            ""
          )}

          <p>Test ID: {CookPlan.id}</p>
          <p>Name: {props.name}</p>
          <p>Hometown: {props.hometown}</p>
          <p>Favorite Recipe: {props.favorte_recipe}</p>
          <p>Rating: {props.rating}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;
