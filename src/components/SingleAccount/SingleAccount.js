import "./SingleAccount.css";

import { useState, useEffect } from "react";
import { API } from "../../Api/BankApi";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import AccountChart from "../AccountChart/AccountChart";
import Movements from "../Movements/Movements";
import { Link, Redirect } from "react-router-dom";

const SingleAccount = (props) => {
  const [data, setData] = useState([]);

  const [account, setAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToken, setIsToken] = useState(true);

  useEffect(() => {
    const query = props.match.params.id;
    if (!localStorage.getItem("token")) {
      setIsToken(false);
    } else {
      const token = localStorage.getItem("token");
      fetchAdmin(token);
    }
    fetchAccount(query);
  }, []);
  // auth admin
  const fetchAdmin = async (token) => {
    setIsLoading(true);
    try {
      await API.get("/users/getme", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAccount = async (account) => {
    setIsLoading(true);
    try {
      const { data } = await API.post("/accounts/get-acc-by-id", {
        accountNum: account,
      });
      setAccount(data);
      await fetchUser(data.accountNum);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const fetchUser = async (query) => {
    console.log(query);
    setIsLoading(true);
    try {
      const { data } = await API.post("/users/get-by-acc", {
        accountNum: query,
      });
      setData(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return !isToken ? (
    <>
      <Redirect to="/" />
    </>
  ) : isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    account &&
    data && (
      <div className="single">
        <DashBoardSide />
        <div className="singleContainer">
          <DashBoardNav />
          <div className="top">
            <div className="left">
              <Link to="/users" style={{ textDecoration: "none" }}>
                <div className=" infoButton editButton">ערוך</div>
              </Link>
              <Link
                to="/accounts/new-account/:id"
                style={{ textDecoration: "none" }}
              >
                <div className="infoButton addButton">הוסף חשבון חדש</div>
              </Link>

              {/* <div className="infoButton changeAccount">
                <button className="dropbtn">החלף חשבון</button>
                <div className="dropdown-content">
                  {accounts.map((account) => {
                    return (
                      <div
                        className="change-account-link"
                        href="#"
                        key={account.accountNum}
                        onClick={handleChangeAccount}
                      >
                        {account.accountNum}
                      </div>
                    );
                  })}
                </div>
              </div> */}

              {/* <div class=" infoButton changeAccount">
              <span>החלף חשבון</span>
              <div class="dropdown-content">
                <p>Hello World!</p>
              </div>
            </div> */}
              <h1 className="title">מידע</h1>
              <div className="item">
                {/* <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                /> */}
                <div className="details">
                  <h1 className="itemTitle">
                    <span> מס חשבון </span>

                    <span>{account.accountNum}</span>
                  </h1>
                  <h1 className="itemTitle">
                    <span> {data.f_name} </span>
                    <span>{data.l_name}</span>
                  </h1>
                  <div className="detailItem">
                    <span className="itemKey">אימייל:</span>
                    <span className="itemValue">{data.email}</span>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">טלפון:</div>
                    <span className="itemValue">{data.phone}</span>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">כתובת</div>
                    <span className="itemValue">{data.address}</span>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">עיר:</div>
                    <span className="itemValue">{data.city}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <AccountChart
                aspect={3 / 1}
                title="User Spending ( Last 6 Months)"
              />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>

            {account.tracking_Mov !== undefined ? (
              <Movements accountMov={account} />
            ) : (
              <Movements accountMov={[]} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SingleAccount;
