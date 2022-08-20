import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Hired
          <span style={{ color: "rgb(12, 110, 253)" }}>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fw-semibold ms-lg-5">
              Reviews
            </Nav.Link>
            <Nav.Link href="#link2" className="fw-semibold ms-lg-5 pb-3 pb-lg-0">
              Post a Job
            </Nav.Link>
          </Nav>
          <Nav.Link href="#link3" className="fw-semibold pe-3 pb-3 pb-lg-0">
            Login
          </Nav.Link>
          <Button className="px-5 fw-bold">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
