import { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [navToggle, setNavToggle] = useState(true);
  const [login, setLogin] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <myContext.Provider
      value={{ navToggle, setNavToggle, login, setLogin, dark, setDark }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
