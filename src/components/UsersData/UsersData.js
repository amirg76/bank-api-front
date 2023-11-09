import "./UsersData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import UsersTable from "../UsersTable/UsersTable";
import { API } from "../../Api/BankApi";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
const UsersData = () => {
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
    <div className="userdata-main">
      <DashBoardSide />
      <div className="userdata-container">
        <DashBoardNav />

        <UsersTable />
      </div>
    </div>
  );
};

export default UsersData;
