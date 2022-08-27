import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../userContext/userContext";
import { useMutation } from "react-query";
import { logout } from "./hooks/useUsers";

const TopNav = () => {
  const { user, setUser } = useContext(UserContext);

  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      setUser(() => null);
      console.log("logged out");
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Hired
          <span style={{ color: "rgb(12, 110, 253)" }}>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto ${user ? "d-none" : "d-flex"}`}>
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#reviews" className="fw-semibold ms-lg-5">
              Reviews
            </Nav.Link>
            <Nav.Link className="fw-semibold ms-lg-5 pb-3 pb-lg-0">Post a Job</Nav.Link>
          </Nav>

          <Nav className={`me-auto ${user?.role === "jobseeker" ? "d-flex" : "d-none"}`}>
            <Nav.Link className="fw-semibold">Profile</Nav.Link>
            <Nav.Link className="fw-semibold">Offers</Nav.Link>
          </Nav>

          <Nav className={`me-auto ${user?.role === "employer" ? "d-flex" : "d-none"}`}>
            <Nav.Link className="fw-semibold">Home</Nav.Link>
            <Nav.Link className="fw-semibold">Profile</Nav.Link>
            <Nav.Link className="fw-semibold">Offers</Nav.Link>
            <Nav.Link className="fw-semibold">Employees</Nav.Link>
          </Nav>

          <Nav className={`me-auto ${user?.role === "admin" ? "d-flex" : "d-none"}`}>
            <Nav.Link className="fw-semibold">Approve Files</Nav.Link>
            <Nav.Link className="fw-semibold">Manage Accounts</Nav.Link>
          </Nav>

          <Nav className="fw-semibold pe-3 pb-3 pb-lg-0 align-items-center">
            {user ? (
              <Link to="/" className="text-dark text-decoration-none" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="text-dark text-decoration-none">
                Login
              </Link>
            )}
          </Nav>
          <Button className={`px-4 fw-bold ${user ? "d-none" : "d-block"}`}>
            <Link to="/signup" className="text-light text-decoration-none">
              Sign Up
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
