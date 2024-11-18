import "../css/HousePlan.css";
import React, { useState } from "react";

const HousePlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [housePlan, setHousePlan] = useState(props);
  const [showHousePlan, setShowHousePlan] = useState(true);

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

  return (
    <>
      {showHousePlan ? (
        <div>
          {showDeleteDialog ? (
            <DeleteHousePlan
              closeDialog={closeDeleteDialog}
              name={housePlan.name}
              _id={housePlan._id}
            />
          ) : (
            ""
          )}

          {showEditDialog ? (
            <EditHousePlan
              closeDialog={closeEditDialog}
              _id={housePlan._id}
              name={housePlan.name}
              size={housePlan.size}
              img_name={housePlan.image_name}
            />
          ) : (
            ""
          )}

          <section className="house-plan columns">
            <section className="feature-image">
              <img
                src={"http://localhost:3001/images/" + housePlan.img_name}
                alt={housePlan.name}
              />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Name: {housePlan.name}</p>
              <p>Hometown: {housePlan.hometown}</p>
              <p>Favorite Recipe: {housePlan.favorte_recipe}</p>
              <p>Rating: {housePlan.rating}</p>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;
