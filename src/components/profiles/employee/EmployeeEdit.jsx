import React, {useState, useRef, useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFile } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../../images/Avatar.jpg";
import { UserContext } from "../../../userContext/userContext";
// import { ProfileContext } from "../../../userContext/profileContext";

const EmployerEdit = (props) => {

  const [imageToPost, setImageToPost] = useState(avatar);
  const [remover, setRemover] = useState(false);
  const filePikerRef = useRef(null);
  const resumePikerRef = useRef(null);
  const {user} = useContext(UserContext);
  const [error, setError] = useState([]);
  // const { setProfile } = useContext(ProfileContext)
  const [personData, setPersonData] = useState({
    about_me: '',
    description: '',
    job_seeker_id: user.id,
    experience_years: '',
    salary_expectation: '',
    availability: '',
    image: '',
    resume: ''
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setPersonData({
      ...personData,
      [e.target.name]: e.target.value,
    });
  }

  const newProfile = (e) => {
    e.preventDefault();
    fetch("http://[::1]:3000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personData),
    })
    .then(res => {
      if(res.ok){
        res.json().then(thing => console.log(thing))
        alert('Upload successful!')
      } else {
        res.json().then(e => setError(Object.entries(e.error)))
      }
    })
    setPersonData({
      about_me: '',
      description: '',
      job_seeker_id: user.id,
      experience_years: '',
      salary_expectation: '',
      availability: '',
      image: '',
      resume: ''
    })
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    }
    setRemover(true);
  }

  const removeImg = () => {
    setImageToPost(avatar);
    setRemover(false);
  }

  // const handleUpdate = () => {
  //   fetch(`http://127.0.0.1:3000/profiles/${user.id}`,{
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({}),
  //   })
  //   .then((r) => r.json())
  //   .then((updatedPro) => console.log(updatedPro));

  //   fetch(`http://127.0.0.1:3000/job_seekers/${user.profile.id}`,{
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({}),
  //   })
  //   .then((r) => r.json())
  //   .then((updatedPro) => console.log(updatedPro));
  // }

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
                <div className="mx-auto d-flex">
                  <Card.Img
                    variant="top"
                    src={imageToPost}
                    className="rounded-circle mx-auto"
                    style={{ maxWidth: "10em" }}
                  ></Card.Img>
                  {remover && (<p role="button" className="text-danger" onClick={removeImg}>Remove</p>)}
                </div>
                <div className="d-flex mx-auto" role="button" onClick={()=> filePikerRef.current.click()}>
                  <div><FontAwesomeIcon icon={faCamera} color="blue"/></div>
                  <p className="px-1">Photo</p>
                </div>
                <div>
                  <input name="image" type='file' value={personData.image} onChange={e => {addImageToPost(e); handleChange(e);}} ref={filePikerRef} className='invisible'/>
                </div>
              </div>
              <div className="w-50 mx-auto">
                <FloatingLabel controlId="floatingInput" label="Years of Experience" className="mb-3">
                  <Form.Control name="experience_years" value={personData.experience_years} onChange={handleChange} type="number" placeholder="Experience" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="About me" className="mb-3">
                  <Form.Control name="about_me" value={personData.about_me} onChange={handleChange} as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Salary expectation in Ksh" className="mb-3">
                  <Form.Control name="salary_expectation" value={personData.salary_expectation} onChange={handleChange} type="number" placeholder="Username" />
                </FloatingLabel>
                {/* <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control name="" value={personData.} onChange={handleChange} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Phone number" className="mb-3">
                  <Form.Control name="" value={personData.} onChange={handleChange} type="tel" placeholder="Phone" pattern="[+][0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Role" className="mb-3">
                  <Form.Control name="" value={personData.} onChange={handleChange} type="text" placeholder="Role" />
                </FloatingLabel> */}
                <FloatingLabel controlId="floatingTextarea2" label="Description" className="mb-3">
                  <Form.Control name="description" value={personData.description} onChange={handleChange} as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Availability" className="mb-3">
                  <Form.Select value={personData.availability} onChange={handleChange} name="availability" aria-label="Floating label select example">
                    <option>Select availability</option>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                  </Form.Select>
                </FloatingLabel>
                <div className="d-flex mx-auto" role="button" onClick={()=> resumePikerRef.current.click()}>
                  <div><FontAwesomeIcon icon={faFile} color="blue"/></div>
                  <p className="px-1">Resume</p>
                </div>
                <div>
                  <input name="resume" value={personData.resume} onChange={handleChange} type='file' ref={resumePikerRef} className='invisible'/>
                </div>
                {error?.length > 0 && (
                  <ul style={{ color: "red" }}>
                    {error.map((error) => (
                      <li className='ml-2 text-red-400' key={error}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={newProfile}>Create</Button>
            <Button type="button" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployerEdit