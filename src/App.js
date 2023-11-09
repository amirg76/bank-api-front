import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import MainBoard from "./components/MainBoard/MainBoard";
import UsersData from "./components/UsersData/UsersData";
import SingleUser from "./components/SingleUser/SingleUser";
import SingleAccount from "./components/SingleAccount/SingleAccount";
import AccountsData from "./components/AccountsData/AccountsData";
import NewForm from "./components/NewForm/NewForm";
import NewUserAction from "./components/NewUserAction/NewUserAction";
import ContectUs from "./components/ContectUs/ContectUs";
import {
  accountsInputs,
  userInputs,
  transferInputs,
  withdrawalInput,
} from "./formSource";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./components/Context/mycontext";
import "./StyleDark.scss";

function App() {
  const { dark } = useContext(myContext);
  return (
    // <div className="main-app">
    <div className={dark ? "main-app dark" : "main-app"}>
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/contect" exact component={ContectUs} />
          <Route path="/a" exact component={MainBoard} />
          <Route path="/users" exact component={UsersData} />
          <Route
            exact
            path="/users/newuser"
            component={() => (
              <NewForm
                inputs={userInputs}
                title="הוסף משתמש חדש"
                type="users"
              />
            )}
          />
          <Route
            exact
            path="/users/new-transfer"
            component={() => (
              <NewUserAction
                inputs={transferInputs}
                title="העברה ביו חשבונות"
                type="transfer"
              />
            )}
          />
          <Route
            exact
            path="/users/new-withdrawal"
            component={() => (
              <NewUserAction
                inputs={withdrawalInput}
                title="משיכת כספים"
                type="withdrawal"
              />
            )}
          />

          <Route path="/users/login" exact component={SingleUser} />
          <Route path="/accounts/account/:id" exact component={SingleAccount} />

          <Route path="/accounts" exact component={AccountsData} />
          <Route
            exact
            path="/accounts/new-account"
            component={() => (
              <NewForm
                inputs={accountsInputs}
                title="הוסף חשבון חדש"
                type="accounts"
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
