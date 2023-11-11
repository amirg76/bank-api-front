import axios from "axios";
import "./NewForm.css";
import { Link } from "react-router-dom";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import PopUp from "../PopUp/PopUp";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewForm = ({ inputs, title, type }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [file, setFile] = useState("");
  const [unique, setUnique] = useState(true);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "password",
    l_name: "",
    f_name: "",
    phone: "",
    address: "",
    city: "",
    cash: "",
    credit: "",
    account: "",
    personal_id: "",
  });
  const [inputAcc, setInputAcc] = useState({
    accountNum: "",
    cash: "",
    credit: "",
    minusInterest: "",
  });
  let url = "";
  type === "users"
    ? (url = "https://bank-api-front.onrender.com/users/create-user")
    : (url = "https://bank-api-front.onrender.com/accounts/create-account");
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === "production") {
    type === "users"
      ? (url = "/users/create-user")
      : (url = "/accounts/create-account");
  }

  const togglePopup = () => {
    setIsPopUpOpen((prev) => ({ isPopUpOpen: !prev.isPopUpOpen }));
  };
  const handleConfirmCreate = () => {
    togglePopup();
  };
  //handle inputs
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    type === "users"
      ? setInputValues({ ...inputValues, [name]: value })
      : setInputAcc({ ...inputAcc, [name]: value });
  };
  //submit form/
  const submitForm = async (e) => {
    e.preventDefault();
    let options = "";
    type === "users"
      ? (options = { ...inputValues })
      : (options = { ...inputAcc });
    try {
      const result = await axios.post(url, options);
      if (result.data === 11000 || result.data.includes("required")) {
        setUnique(false);
      } else setUnique(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <DashBoardSide />
      <div className="newContainer">
        <DashBoardNav />
        <div className="new-top">
          <h1>{title}</h1>
        </div>
        <div className="new-bottom">
          <div className="new-right">
            <form className="new-form" onSubmit={submitForm}>
              <div className="new-formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="new-icon" />
                </label>
                <input
                  className="new-input"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="new-formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleInputChange}
                    value={
                      type === "users"
                        ? inputValues[input.name]
                        : inputAcc[input.name]
                    }
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="new-input"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="new-button"
                onClick={handleConfirmCreate}
              >
                שלח
              </button>
              <Link to={"/" + type + "/"}>
                <button
                  className="new-button"
                  onClick={() => {
                    setIsPopUpOpen(false);
                  }}
                >
                  חזור
                </button>
              </Link>
            </form>
            {console.log(url)}
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <PopUp
          setIsPopUpOpen={setIsPopUpOpen}
          typeOfPopup={type}
          uniqueData={unique}
        />
      )}
    </div>
  );
};

export default NewForm;
