import React from "react";
const CreateContext = React.createContext({
  token: "",
  setToken: (token) => {},
});
export default CreateContext;
