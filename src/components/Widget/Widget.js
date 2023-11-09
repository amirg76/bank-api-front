import "./Widget.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Widget = () => {
  return (
    <div className="widget">
      <div className="widget-left">
        <span className="widget-left-title">USERS</span>
        <span className="widget-left-counter">21312</span>
        <span className="widget-left-link">See all user</span>
      </div>
      <div className="widget-right">
        <div className="widget-percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        <PersonOutlinedIcon className="widget-personal-icon" />
      </div>
    </div>
  );
};

export default Widget;
