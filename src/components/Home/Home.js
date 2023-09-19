// import classes from "./Home.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function profileComplete() {
    navigate("/profile");
  }
  return (
    <>
      <h2>Welcome to Expense Trancer</h2>
      <p>your profile is incomplete</p>
      <Button variant="primary" type="submit" onClick={profileComplete}>
        Complete Profile
      </Button>
    </>
  );
};
export default Home;
