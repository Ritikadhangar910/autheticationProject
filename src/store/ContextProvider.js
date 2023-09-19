import { useState } from "react";
import CreateContext from "./create-context";
const ContextProvider = (props) => {
  const [token, setToken] = useState("");
  function setTokenHandler(token) {
    setToken(token);
  }
  const createcontext = {
    token: token,
    setToken: setTokenHandler,
  };
  return (
    <CreateContext.Provider value={createcontext}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
