import { createContext, useState } from "react";

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [userData, setUserData] = useState({
    "id": 1,
    "name": "joe",
    "email": "j@j.com"
  });
  const [subscriptionData, setSubscriptionData] = useState({
    planId: 1,
    productsId: [1, 2],
    shipDate: [1],
  });

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
