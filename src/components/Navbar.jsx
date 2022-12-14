import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../userContext/userContext";
import { useMutation } from "react-query";
import { logout } from "./hooks/useUsers";
import SubscribeModal from "./SubscribeModal";

const TopNav = () => {
  const { user, setUser } = useContext(UserContext);
  const [subscribeModalShow, setSubscribeModalShow] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(logout, {
    onSuccess: () => {
      setUser(() => null);
      localStorage.removeItem("user");
      navigate("/");
      console.log("logged out");
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <>
      <style type="text/css">
        {`
    .nav-link:hover {
      color: #0d6efd;
    }
    `}
      </style>
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
              <Link
                to="/signup"
                className="fw-semibold ms-lg-5 pb-3 pb-lg-0 text-decoration-none nav-link"
              >
                Post a Job
              </Link>
            </Nav>

            <Nav className={`me-auto ${user?.role === "jobseeker" ? "d-flex" : "d-none"}`}>
              <Link to="/jobseekerprofile" className="fw-semibold text-decoration-none nav-link">
                Profile
              </Link>
              <Link to="/joboffers" className="fw-semibold text-decoration-none nav-link">
                Offers
              </Link>
            </Nav>

            <Nav className={`me-auto ${user?.role === "employer" ? "d-flex" : "d-none"}`}>
              <Link to="/dashboard" className="fw-semibold text-decoration-none nav-link">
                Home
              </Link>
              <Link to="/employerprofile" className="fw-semibold text-decoration-none nav-link">
                Profile
              </Link>
              <Link to="/offers" className="fw-semibold text-decoration-none nav-link">
                Offers
              </Link>
              <Nav.Link
                className="fw-semibold text-decoration-none nav-link"
                onClick={() => setSubscribeModalShow(true)}
              >
                Subscribe
              </Nav.Link>
              <Link to="/employeemanagement" className="fw-semibold text-decoration-none nav-link">
                Employees
              </Link>
            </Nav>

            <Nav className={`me-auto ${user?.role === "admin" ? "d-flex" : "d-none"}`}>
              <Link to="/approveFiles" className="fw-semibold text-decoration-none nav-link">
                Approve Files
              </Link>
              <Link to="/manageaccounts" className="fw-semibold text-decoration-none nav-link">
                Manage Accounts
              </Link>
            </Nav>

            <Nav className="fw-semibold pe-3 pb-3 pb-lg-0">
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
      <SubscribeModal show={subscribeModalShow} onHide={() => setSubscribeModalShow(false)} />
    </>
  );
};

export default TopNav;
