import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./ProfileComplete.module.css";
import { useState } from "react";
// import CreateContext from "../../store/create-context";
import { useSelector } from "react-redux";
function ProfileComplete() {
  const [name, setname] = useState("");
  const [url, seturl] = useState("");
  const token = useSelector((state) => state.auth.token);
  // const createcontext = useContext(CreateContext);
  function ProfileCompleteFun(e) {
    e.preventDefault();
    if (name.length > 0 && url.length > 0) {
      CallUpdateProfile();
    }
  }
  async function CallUpdateProfile() {
    let response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDobfUCPDIraKRAx9neLhvCx2BR1c76nSI",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: name,
          photoUrl: url,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      let data = await response.json();
      console.log(data);
    }
  }
  return (
    <>
      <h2 className={classes.heading}>Profile Complete</h2>
      <div className={classes.mainForm}>
        <Form className={classes.form} onSubmit={ProfileCompleteFun}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Profile URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter url"
              value={url}
              onChange={(e) => {
                seturl(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ProfileComplete;
