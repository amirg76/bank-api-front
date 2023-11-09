import axios from "axios";
import "./NewUserAction.css";
import { Link, useLocation, Redirect } from "react-router-dom";

import DashBoardNav from "../DashBoardNav/DashBoardNav";

import PopUpAction from "../PopUpAction/PopUpAction";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useState, useEffect } from "react";
import { API } from "../../Api/BankApi";

const NewUserAction = ({ inputs, title, type }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [error, setError] = useState(false);
  const [typeOfError, setTypeOfError] = useState("");
  // const [unique, setUnique] = useState(true);
  const [isToken, setIsToken] = useState(true);
  const [token, setToken] = useState("");
  const [withdrawalValues, setWithdrawalValues] = useState({
    amount: "",
    userAccount: "",
  });
  const [transferInput, setTransferInput] = useState({
    userAccount: "",
    accountToTransfer: "",
    transferAmount: "",
  });
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsToken(!isToken);
    } else {
      setToken(token);
      if (location.state.userAccount) {
        const userAcc = location.state.userAccount;

        type === "transfer"
          ? setTransferInput({ userAccount: userAcc })
          : setWithdrawalValues({ userAccount: userAcc });
      }
      // console.log(location.state.userAccount);
    }
  }, [isToken, type]);

  const setUrl = () => {
    let url = "";
    type === "transfer"
      ? (url = "http://localhost:5000/users/new-transfer")
      : (url = "http://localhost:5000/users/new-withdrawal");
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV === "production") {
      type === "transfer"
        ? (url = "/users/new-transfer")
        : (url = "/users/new-withdrawal");
    }
    return url;
  };

  const togglePopup = () => {
    setIsPopUpOpen((prev) => ({ isPopUpOpen: !prev.isPopUpOpen }));
  };

  // const handleConfirmCreate = () => {
  //   togglePopup();
  // };

  //handle inputs
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    type === "transfer"
      ? setTransferInput({ ...transferInput, [name]: value })
      : setWithdrawalValues({ ...withdrawalValues, [name]: value });
  };
  //submit form
  const submitForm = async (e) => {
    e.preventDefault();
    let options = "";
    let url = setUrl();

    type === "transfer"
      ? (options = { ...transferInput })
      : (options = { ...withdrawalValues });
    try {
      console.log(options);
      console.log(url);
      const result = await axios.put(url, options);
      console.log(result.data);
      checkResult(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkResult = (data) => {
    if (data !== "sucsses") setError(true);
    if (data === "credit") setTypeOfError("אין מספיק קרדיט בחשבון");
    if (data === "transfer") setTypeOfError(" אין חשבון כזה במערכת");
    if (data === "user") setTypeOfError(" תקלה בקבלת מס חשבון המעביר");
    if (data === "sucsses") {
      setError(false);
      togglePopup();
    }
  };
  return !isToken ? (
    <>
      <Redirect to="/" />
    </>
  ) : (
    <div className="new">
      <div className="newContainer-action">
        <DashBoardNav />
        <div className="new-top-action">
          <h1>{title}</h1>
        </div>
        <div className="new-bottom-action">
          <div className="new-right">
            <form className="new-form-action" onSubmit={submitForm}>
              <div className="new-formInput-action">
                {console.log(error)}
                {error ? (
                  <label htmlFor="file">
                    שגיאה: <ErrorOutlineIcon className="new-icon" />
                    {typeOfError}
                  </label>
                ) : (
                  ""
                )}
                {/* <input
                  className="new-input"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                /> */}
              </div>

              {inputs.map((input) => (
                <div className="new-formInput-action" key={input.id}>
                  <label className="input-label">{input.label}</label>
                  <input
                    onChange={handleInputChange}
                    value={
                      type === "transfer"
                        ? withdrawalValues[input.name]
                        : transferInput[input.name]
                    }
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="new-input-action"
                  />
                </div>
              ))}
              <div className="action-buttons">
                <button
                  type="submit"
                  className="new-button-action"
                  onClick={submitForm}
                  // onClick={handleConfirmCreate}
                >
                  שלח
                </button>
                <Link to="/users/login">
                  <button
                    className="new-button-action"
                    onClick={() => {
                      setIsPopUpOpen(false);
                    }}
                  >
                    חזור
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <PopUpAction
          setIsPopUpOpen={setIsPopUpOpen}
          typeOfPopup={type}
          // uniqueData={unique}
        />
      )}
    </div>
  );
};

export default NewUserAction;
