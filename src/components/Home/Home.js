import React from "react";
import Alert from "react-bootstrap/Alert";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CreateContext from "../../store/create-context";
import axios from "axios";
const Home = () => {
  const [err, seterr] = useState(false);
  const navigate = useNavigate();
  const createcontext = useContext(CreateContext);
  function profileComplete() {
    navigate("/profile");
  }
  async function verifyEmailfun() {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDobfUCPDIraKRAx9neLhvCx2BR1c76nSI",
        {
          requestType: "VERIFY_EMAIL",
          idToken: createcontext.token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        seterr(true);
      } else {
        console.error("Error:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      {err && <Alert variant="success">User is Varified now</Alert>}
      <div className="m-3">
        <h2>Welcome to Expense Trancer</h2>
        <p>
          your profile is{" "}
          {createcontext.name !== undefined ? "complete" : " incomplete"}
        </p>
        <Button variant="primary" type="submit" onClick={profileComplete}>
          Complete Profile
        </Button>
        <div className="mt-5">
          <h3>Verify Email: </h3>
          <Button variant="primary" type="submit" onClick={verifyEmailfun}>
            Verify Email
          </Button>
        </div>
      </div>
    </>
  );
};
export default Home;
