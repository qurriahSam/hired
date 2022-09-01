import React, {useState, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import girlReviewImg from "../../../images/ladyreview.jpg";

const EmployerEdit = (props) => {

  const [imageToPost, setImageToPost] = useState(null);
  const filePikerRef = useRef(null)

  const addImageToPost = (e) => {

  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Profile
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <h4>Personal Info</h4>
            <div className="d-md-flex justify-content-around">
              <div className="d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={girlReviewImg}
                  className="rounded-circle mx-auto mb-3"
                  style={{ maxWidth: "10em" }}
                ></Card.Img>
                <div className="d-flex mx-auto" role="button" onClick={()=> filePikerRef.current.click()}>
                  <div><FontAwesomeIcon icon={faCamera} color="blue"/></div>
                  <p className="px-1">Photo</p>
                </div>
                <div>
                  <input type='file' onChange={addImageToPost} ref={filePikerRef} className='invisible'/>
                </div>
              </div>
              <div className="w-50 mx-auto">
                <FloatingLabel controlId="floatingInput" label="User name" className="mb-3">
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Phone number" className="mb-3">
                  <Form.Control type="tel" placeholder="Phone" pattern="[+][0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Role" className="mb-3">
                  <Form.Control type="text" placeholder="Role" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Experience" className="mb-3">
                  <Form.Control type="number" placeholder="Experience" />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="" onClick={props.onHide}>Update</Button>
            <Button type="button" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployerEdit