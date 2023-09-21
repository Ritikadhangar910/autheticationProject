import React from "react";
const CreateContext = React.createContext({
  token: "",
  isLoggedIn: false,
  expensedata: [],
  addExpnse: (item) => {},
  email: "",
  name: "",
  photourl: "",
  setToken: (token) => {},
  setTokenout: () => {},
});
export default CreateContext;
