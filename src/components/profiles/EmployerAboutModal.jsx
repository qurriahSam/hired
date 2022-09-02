import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../userContext/userContext";

function EmployerAboutModal(props) {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);
  const [userAbout, setUserAbout] = useState({
    employer: user.employer ? user.employer : "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserAbout({ ...userAbout, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        setIsUploading(true);
        const url = `https://hired-app-api.herokuapp.com/employers/${user.id}`;
        const response = await fetch(url, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify(userAbout),
        });
        const data = await response.json();
        setIsUploading(false);
        console.log(data);

        if (data.id) {
          setUser(() => data);
        }
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
            <Form.Label>About Me:</Form.Label>
            <Form.Control
              name="employer"
              type="text"
              placeholder="brief description"
              value={userAbout.employer}
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

export default EmployerAboutModal;
