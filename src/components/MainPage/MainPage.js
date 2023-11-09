import { useState, useContext } from "react";
import { myContext } from "../Context/mycontext.js";
import Carousel from "../Carousel/Carousel";
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header.js";
import Tools from "../Tools/Tools";
import "./MainPage.css";
import LoginForm from "../LoginForm/LoginForm.js";
const MainPage = () => {
  // const { data, setData } = useContext(myContext);
  // const { data, setData, navToggle } = useContext(myContext);
  const { login, setLogin } = useContext(myContext);

  const [isLogin, setIslogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <>
      <Header />
      {login && (
        <div className="login-form-section">
          <LoginForm
            openLogin={(e) => setIslogin(e)}
            closeAll={(e) => setLogin(e)}
          />
        </div>
      )}
      <div className="main-container">
        <Carousel />
      </div>
      <div className="first-section">
        <div className="first-section-title">
          <h2>עכשיו באינבסט</h2>
        </div>
        <div className="main-cards">
          <CardContainer />
        </div>
      </div>
      <div className="second-section">
        <div className="second-section-title">
          <h2>כלים ומחשבונים</h2>
        </div>
        <Tools />
      </div>
    </>
  );
};

export default MainPage;
