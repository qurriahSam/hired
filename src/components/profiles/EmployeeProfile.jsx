import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import girlReviewImg from "../../images/ladyreview.jpg";
import { faFile, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";

function EmployeeProfile() {
  const [radioValue, setRadioValue] = useState("unavailable");

  const radios = [
    { name: "Available", value: "available" },
    { name: "Unavailable", value: "unavailable" },
  ];
  return (
    <div className="container mt-3" style={{ maxWidth: "40em" }}>
      <Card className="shadow-sm">
        <span className="d-flex justify-content-end pe-4 pt-3">
          <FontAwesomeIcon icon={faPencil} color="gray" />
        </span>

        <Card.Body className="d-md-flex justify-content-between">
          <div>
            <Card.Img
              variant="top"
              src={girlReviewImg}
              className="rounded-circle mx-auto"
              style={{ maxWidth: "10em" }}
            ></Card.Img>
            <Card.Title className="fw-bold pt-2">JobSeeker Name</Card.Title>
          </div>
          <div>
            <div className="">
              <Table borderless size="sm">
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>jane doe</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>sample@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>+254123456</td>
                  </tr>
                  <tr>
                    <td>Role:</td>
                    <td>UI designer</td>
                  </tr>
                  <tr>
                    <td>Experience:</td>
                    <td>5 years</td>
                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>
                      <ButtonGroup>
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            size="sm"
                            variant={idx % 2 ? "outline-danger" : "outline-success"}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

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
  );
}

export default EmployeeProfile;
