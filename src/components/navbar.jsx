import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const TopNav = () => {
  return (
    <Navbar bg="#fff" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Hired
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link" className="md:ps-5">
              Post a Job
            </Nav.Link>
          </Nav>
          <p className="pt-3 pe-4">
            <a href="#">Login</a>
          </p>
          <Button className="px-5 fw-bold">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
