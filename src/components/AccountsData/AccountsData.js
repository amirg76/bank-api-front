import "./AccountsData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import AccountTable from "../AccountTable/AccountTable";
import { API } from "../../Api/BankApi";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const AccountsData = () => {
  const [isToken, setIsToken] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
      setIsToken(false);
    } else {
      fetchAdmin(token);
    }
  }, []);

  const fetchAdmin = async (token) => {
    try {
      const { data } = await API.get("/users/getme", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setIsToken(true);
      console.log(data);
    } catch (error) {
      setIsToken(false);
      console.log(error.message);
    }
  };
  return !isToken ? (
    <>
      <Redirect to="/" />
    </>
  ) : (
    <div className="accounts-data-main">
      <DashBoardSide />
      <div className="accounts-data-container">
        <DashBoardNav />

        <AccountTable />
      </div>
    </div>
  );
};

export default AccountsData;
