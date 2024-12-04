import React, { useState } from "react";

const DeleteCookPlan = (props) => {
  const [name, setName] = useState(props);
  const [result, setResult] = useState("");
  const deleteCookPlan = async () => {
    try {
      console.log(props);
      const response = await fetch(
        `http://localhost:3001/api/house_plans/${props._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        setResult("Cook Plan Successfully Deleted");
        props.hideCookPlan();
        props.closeDialog();
      } else {
        setResult("Sorry, we couldn't delete your Cook Plan at this time.");
      }
    } catch (error) {
      setResult("An error occurred while deleting the Cook Plan.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete this Cook Plan?</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>
              <button onClick={deleteCookPlan}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCookPlan;
