import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PopUpAction.css";

function PopUpAction({ setIsPopUpOpen, typeOfPopup, uniqueData }) {
  // const [inputValues, setInputValues] = useState({
  //   newUserName: "",
  //   newTitle: "",
  //   newContent: "",
  // });

  // const handleInputChange = ({ target }) => {
  //   console.log(target.value);
  //   const { id, value } = target;
  //   setInputValues({ ...inputValues, [id]: value });
  //   // setIsLoading(false);
  // };

  // const handleNewUpdate = () => {
  //   return handleUpdate(
  //     id,
  //     inputValues.newUserName,
  //     inputValues.newTitle,
  //     inputValues.newContent
  //   );
  // };

  return (
    <div className="popup-continer-active">
      {/* {uniqueData ? ( */}
      <div className="popup-card-active">
        <h4> הועבר בהצלחה...</h4>
        <Link to={"/users/login"}>
          <button
            onClick={() => {
              setIsPopUpOpen(false);
            }}
          >
            חזור
          </button>
        </Link>
      </div>
    </div>
  );
}
export default PopUpAction;
