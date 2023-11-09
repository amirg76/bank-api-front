import React, { useState } from "react";
import "./DashBoardNav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { myContext } from "../Context/mycontext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { style } from "@mui/system";
const DashBoardNav = () => {
  const { dark, setDark } = useContext(myContext);
  const [logOut, setLogOut] = useState(false);

  //Log Out
  const changeLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    setLogOut(!logOut);
  };

  return (
    <div className="dash-navbar">
      <div className="wrapper">
        <div className="search">
          <input className="search-input" type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item logout-item" onClick={changeLogOut}>
            <LogoutIcon />
            התנתק מהחשבון
          </div>
          <div className="item">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon onClick={() => setDark(!dark)} />
          </div>
          {logOut && (
            <>
              <Redirect to="/" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
