import "./FeaturedChart.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const FeaturedChart = () => {
  return (
    <div className="featured-chart">
      <div className="top-featured-chart">
        <h1 className="title-featured-chart">סך הכול</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom-featured-chart">
        <div className="progress-section">
          <div className="progress-chart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
          </div>
          <p className="progress-title">סך הכל היום</p>
          <p className="progress-amount">420</p>
          <p className="progress-desc">לא כולל תנועות אחרונות</p>
        </div>
      </div>
    </div>
  );
};
export default FeaturedChart;
