import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../userContext/userContext";

function EmployerAboutModal(props) {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);
  const [userPhone, setUserPhone] = useState({
    phone_number: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserPhone({ ...userPhone, [key]: value });
  };

  const handleSubmit = () => {
    console.log({ phone_number: Number(userPhone.phone_number) });
    const sendData = async () => {
      try {
        setIsUploading(true);
        const url = `https://hired-app-api.herokuapp.com/mpesa_index`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: { phone_number: Number(userPhone.phone_number) },
        });
        const data = await response.json();
        setIsUploading(false);
        console.log(data);

        /*         if (data.id) {
          setUser(() => data);
        } */
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
        <p>A subscription fee of Ksh 100 will be charged</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              name="phone_number"
              type="text"
              placeholder="254722123456"
              value={userPhone.phone_number}
              onChange={handleChange}
              disabled={isUploading}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>make payment</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmployerAboutModal;
