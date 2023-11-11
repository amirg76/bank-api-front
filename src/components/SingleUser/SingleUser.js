import "./SingleUser.css";

import { useState, useEffect } from "react";
import { API } from "../../Api/BankApi";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import AccountChart from "../AccountChart/AccountChart";
import Movements from "../Movements/Movements";
import { Link, Redirect } from "react-router-dom";
// import axios from "axios";
const SingleUser = (props) => {
  const [data, setData] = useState([]);
  const [AccountIndex, setAccountIndex] = useState(0);
  const [accounts, setAccounts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToken, setIsToken] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setIsToken(!isToken);
    } else {
      const token = localStorage.getItem("token");
      // const query = localStorage.getItem("data");
      const fetchUser = async () => {
        setIsLoading(true);
        try {
          const { data } = await API.get("/users/getme", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setData(data);
          await fetchAccount(data.account);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchUser();
    }
  }, [isToken]);

  const fetchAccount = async (accounts) => {
    const accountsArr = accounts.map((account) => {
      return API.post("/accounts/get-acc-by-id", {
        accountNum: account,
      });
    });
    try {
      const accountsObj = await axios.all(accountsArr);
      const accountArr = accountsObj.map((obj) => obj.data);
      setAccounts(accountArr);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeAccount = async ({ target }) => {
    const newAccount = Number(target.innerText);
    const newAccountIndex = accounts.findIndex((account) => {
      return newAccount === account.accountNum ? true : false;
    });
    console.log(newAccount);

    // const accountData = await API.post("/accounts/get-acc-by-id", {
    //   accountNum: newAccount,
    // });
    // console.log(accountData.data);
    // setAccounts(accountData.data);
    setAccountIndex(newAccountIndex);
  };

  const handleTransfer = () => {};

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
    accounts &&
    data && (
      <div className="single">
        {/* <DashBoardSide /> */}
        <div className="singleContainer">
          <DashBoardNav />
          <div className="top">
            <div className="left">
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/users/new-transfer",
                  state: { userAccount: accounts[AccountIndex].accountNum },
                }}
              >
                <div
                  className=" infoButton-single-user editButton"
                  onClick={handleTransfer}
                >
                  העברה
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/users/new-withdrawal",
                  state: { userAccount: accounts[AccountIndex].accountNum },
                }}
              >
                <div className="infoButton-single-user addButton">משיכה</div>
              </Link>

              <div className="infoButton-single-user changeAccount">
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
              </div>

              <h1 className="title">מידע</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">
                    <span> מס חשבון </span>
                    {console.log(accounts)}
                    <span>{accounts[AccountIndex].accountNum}</span>
                  </h1>
                  <h1 className="itemTitle">
                    <span> {data.f_name} </span>
                    <span>{data.l_name}</span>
                  </h1>
                  <h1 className="itemTitle">
                    <span> סה"כ: </span>
                    <span>{accounts[AccountIndex].cash} ש"ח</span>
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
            {console.log(accounts[AccountIndex].tracking_Mov)}
          </div>
          <div className="bottom">
            {console.log(accounts[AccountIndex])}
            <h1 className="title">העברות אחרונות</h1>

            {accounts[AccountIndex].tracking_Mov !== undefined ? (
              <Movements accountMov={accounts[AccountIndex]} />
            ) : (
              <Movements accountMov={false} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SingleUser;
