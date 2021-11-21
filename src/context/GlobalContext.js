import { createContext, useState } from "react";

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContext;
