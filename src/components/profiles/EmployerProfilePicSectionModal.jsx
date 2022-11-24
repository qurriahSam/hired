import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { UserContext } from "../../userContext/userContext";

function EmployerProfilePicSectionModal(props) {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    user_name: user.user_name,
    email: user.email,
    phone_number: user.phone_number,
    first_name: user.first_name,
    last_name: user.last_name,
    company_name: user.company_name,
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handleFileChange = (event) => {
    setUserDetails({ ...userDetails, image: event.target.files[0] });
  };

  const handleSubmit = () => {
    console.log(userDetails);
    const sendData = async () => {
      try {
        setIsUploading(true);
        const url = `https://hired-app-api.herokuapp.com/employers/${user.id}`;
        const response = await fetch(url, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify(userDetails),
        });
        const data = await response.json();
        setIsUploading(false);
        console.log(data);
      } catch (error) {
        setIsUploading(false);
        console.log("signup error", error);
      }
    };
    sendData();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              name="user_name"
              type="text"
              placeholder="username"
              value={userDetails.user_name}
              onChange={handleChange}
              disabled={isUploading}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  name="first_name"
                  placeholder="First name"
                  value={userDetails.first_name}
                  onChange={handleChange}
                  disabled={isUploading}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupFirstName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  name="last_name"
                  placeholder="Last name"
                  value={userDetails.last_name}
                  onChange={handleChange}
                  disabled={isUploading}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="email"
              value={userDetails.email}
              onChange={handleChange}
              disabled={isUploading}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Profile Pic:</Form.Label>
            <Form.Control
              name="image"
              type="file"
              accept="image/*"
              placeholder="image"
              onChange={handleFileChange}
              disabled={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              name="phone_number"
              type="text"
              placeholder="+254722123456"
              value={userDetails.phone_number === null ? "" : userDetails.phone_number}
              onChange={handleChange}
              disabled={isUploading}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupCompanyName">
            <Form.Label>Company Name:</Form.Label>
            <Form.Control
              name="company_name"
              placeholder="Company name"
              type="text"
              value={userDetails.company_name}
              onChange={handleChange}
              disabled={isUploading}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmployerProfilePicSectionModal;
