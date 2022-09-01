import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfilePicSection } from "./ProfilePicSection";
import EmployerEdit from "./EmployeeEdit";

function EmployeeProfile() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      {modalShow?(<EmployerEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />):null}
      <div className="container mt-3" style={{ maxWidth: "40em" }}>
        <ProfilePicSection see={()=>setModalShow(true)}/>
        <Card className="shadow-sm mt-4">
          <span className="d-flex justify-content-end pe-4 pt-3"></span>
          <Card.Body>
            <span className="d-flex justify-content-between">
              <Card.Title className="fw-bold fs-4">About Me</Card.Title>
              <FontAwesomeIcon icon={faPencil} color="gray" />
            </span>
            <Card.Text>
              I would describe myself my self now in four different parts. I would describe myself as
              a kind, generous and helpful person. I love to help my friends out by giving them advice
              with their problems, and by having their back whenever they need it from supporting them
              in activities such as going to band concerts to being there emotionally when a break up
              happens. I would also describe myself as a very artistic, imaginative and creative. I
              love to build and make things with my hands, especially in art. For example, I enjoy
              sculpting and creating tiny tiny creatures with clay. Thirdly, I would describe myself
              as a very intelligent, curious and wondrous person.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow-sm mt-4">
          <span className="d-flex justify-content-end pe-4 pt-3">
            <FontAwesomeIcon icon={faCirclePlus} color="gray" />
          </span>
          <Card.Body>
            <Card.Title className="fw-bold fs-4">Experience</Card.Title>
            <span className="d-flex justify-content-between">
              <Card.Title className="fs-6 fw-bold">Company Name</Card.Title>
              <FontAwesomeIcon icon={faPencil} color="gray" />
            </span>
            <Card.Text>
              In addition, i am also labeled as the “Mediator”. This means that I am more introverted
              than extroverted and very disorganized. I am also dedicated and hardworking in reaching
              my goals and visions. In addition, being a mediator means that I’m open and flexible,
              but on the flip side that also means that I can be too impractical and take things too
              personally.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mt-4">
          <Card.Body>
            <span className="d-flex justify-content-between">
              <Card.Title>Resume</Card.Title>
              <FontAwesomeIcon icon={faPencil} color="gray" />
            </span>
            <FontAwesomeIcon icon={faFile} className="mt-5" color="#072A6C" fontSize={100} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EmployeeProfile;
