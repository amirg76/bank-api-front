import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PopUp.css";

function PopUp({ setIsPopUpOpen, typeOfPopup, uniqueData }) {
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
    <>
      <div className="popup-continer">
        {uniqueData ? (
          <div className="popup-card-delete">
            <h4> נוצר בהצלחה...</h4>
            <Link to={"/" + typeOfPopup + "/"}>
              <button
                onClick={() => {
                  setIsPopUpOpen(false);
                }}
              >
                חזור
              </button>
            </Link>
          </div>
        ) : (
          <div className="popup-card-delete">
            <h4> אחד הנתונים קיים או לא תקין</h4>
            <button
              onClick={() => {
                setIsPopUpOpen(false);
              }}
            >
              חזור
            </button>
          </div>
        )}
      </div>
    </>
  );
  // }
}
export default PopUp;
