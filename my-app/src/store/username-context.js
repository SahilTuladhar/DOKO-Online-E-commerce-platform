import { createContext } from "react";


const UsernameContext = createContext({
  name: "",
});

export function UsernameContextProvider(props) {
  const userName = '';
  const context = {
    name: userName,
  
  };

  return (
    <UsernameContext.Provider value={context}>{props.children}</UsernameContext.Provider>
  );
}

export default UsernameContext;
