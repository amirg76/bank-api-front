import "./DashBoardSide.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { Link } from "react-router-dom";
import { myContext } from "../Context/mycontext";
import { useContext } from "react";
const DashBoardSide = () => {
  const { dark, setDark } = useContext(myContext);
  return (
    <div className="main-side">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="side-logo" src="/assets/img/logo.png" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">ראשי</p>
          <li>
            <DashboardIcon className="icon" />
            <span>לוח בקרה</span>
          </li>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>משתמשים</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts" style={{ textDecoration: "none" }}>
              <CardGiftcardOutlinedIcon className="icon" />
              <span>חשבונות</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={() => setDark(false)}></div>
        <div className="colorOptions" onClick={() => setDark(true)}></div>
      </div>
      <div className="center">
        {/* <ul>
          <p className="title">פעולות</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>ערוך משתמשים</span>
            </Link>
          </li>
          <li>
            <Link
              to="/accounts/new-account-by-id"
              style={{ textDecoration: "none" }}
            >
              <CardGiftcardOutlinedIcon className="icon" />
              <span>הוסף חשבון למשתמש</span>
            </Link>
          </li>
        </ul> */}
        {/*  */}
        {/* <Link to="/users" style={{ textDecoration: "none" }}>
          <div className="infoButton editButton">ערוך</div>
        </Link>
        <Link to="/accounts/new-account" style={{ textDecoration: "none" }}>
          <div className="infoButton addButton">הוסף חשבון חדש</div>
        </Link> */}
      </div>
    </div>
  );
};

export default DashBoardSide;
