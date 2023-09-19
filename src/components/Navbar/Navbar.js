import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CreateContext from "../../store/create-context";

function NavbarFun() {
  const createcontext = useContext(CreateContext);
  function logoutFun() {
    createcontext.setTokenout();
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!createcontext.isLoggedIn ? (
              <Nav.Link href="/login">Login</Nav.Link>
            ) : (
              <>
                {" "}
                <Nav.Link href="/">Home</Nav.Link>
                <Button variant="primary" type="submit" onClick={logoutFun}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFun;
