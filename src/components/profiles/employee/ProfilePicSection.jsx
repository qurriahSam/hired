import React, { useState, useContext} from "react";
import girlReviewImg from "../../../images/ladyreview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";
import { UserContext } from "../../../userContext/userContext";

export const ProfilePicSection = ({see}) => {
  const [radioValue, setRadioValue] = useState("unavailable");
  const {user} = useContext(UserContext);
  

  const radios = [
    { name: "Available", value: "available" },
    { name: "Unavailable", value: "unavailable" },
  ];
  return (
    <Card className="shadow-sm">
      <span className="d-flex justify-content-end pe-4 pt-3" >
        <FontAwesomeIcon icon={faCirclePlus} color="gray" onClick={see}/>
      </span>

      <Card.Body className="d-md-flex justify-content-between">
        <div>
          <Card.Img
            variant="top"
            src={girlReviewImg}
            className="rounded-circle mx-auto"
            style={{ maxWidth: "10em" }}
          ></Card.Img>
          <Card.Title className="fw-bold pt-2">{user.first_name} {user.last_name}</Card.Title>
        </div>
        <div>
          <div className="">
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td>{user.user_name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{user.phone_number}</td>
                </tr>
                <tr>
                  <td>Role:</td>
                  <td>{user.role}</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>3</td>
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
