import "./MainBoard.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import Widget from "../Widget/Widget";
import FeaturedChart from "../FeaturedChart/FeaturedChart";
import AccountChart from "../AccountChart/AccountChart";
import Movements from "../Movements/Movements";
const MainBoard = () => {
  return (
    <div className="main-board">
      <DashBoardSide />
      <div className="home-container">
        <DashBoardNav />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">
          <FeaturedChart />
          <AccountChart aspect={2 / 1} />
        </div>
        <div className="list-container">
          <div className="list-title">העברות אחרונות</div>
          <Movements />
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
