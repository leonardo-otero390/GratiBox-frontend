import { createContext, useState } from "react";

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(undefined);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        subscriptionData,
        setSubscriptionData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContext;
