import React, { useState} from "react";
import girlReviewImg from "../../../images/ladyreview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";

export const ProfilePicSection = ({see}) => {
  const [radioValue, setRadioValue] = useState("unavailable");

  

  const radios = [
    { name: "Available", value: "available" },
    { name: "Unavailable", value: "unavailable" },
  ];
  return (
    <Card className="shadow-sm">
      <span className="d-flex justify-content-end pe-4 pt-3" >
        <FontAwesomeIcon icon={faPencil} color="gray" onClick={() => see(true)}/>
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
      </Card.Body>
    </Card>
  );
};
