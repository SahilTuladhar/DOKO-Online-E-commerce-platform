import { createContext } from "react";

const UsernameSellerContext = createContext({
  sellername: "",
});

export function UsernameSellerContextProvider(props) {
  const userName = "";
  const context = {
    sellername: userName,
  };

  return (
    <UsernameSellerContext.Provider value={context}>
      {props.children}
    </UsernameSellerContext.Provider>
  );
}

export default UsernameSellerContext;
