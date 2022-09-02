import React, { useContext, useState } from "react";
import noImg from "../../images/placeholderimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { UserContext } from "../../userContext/userContext";
import EmployerProfilePicSectionModal from "./EmployerProfilePicSectionModal";
import EmployerAboutModal from "./EmployerAboutModal";

const EmployerProfile = () => {
  const [profilePicModalShow, setProfilePicModalShow] = useState(false);
  const [employerAboutModalShow, setEmployerAboutModalShow] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="container mt-3" style={{ maxWidth: "40em" }}>
      <Card className="shadow-sm">
        <span className="d-flex justify-content-end pe-4 pt-3">
          <FontAwesomeIcon
            icon={faPencil}
            color="gray"
            onClick={() => setProfilePicModalShow(true)}
          />
        </span>
        <Card.Body className="d-md-flex justify-content-around">
          <div>
            <Card.Img
              variant="top"
              src={noImg}
              className="rounded-circle mx-auto"
              style={{ maxWidth: "10em" }}
            ></Card.Img>
            <Card.Title className="fw-bold pt-2">

              {user?.first_name} {user?.last_name}
            </Card.Title>
            <Card.Subtitle className="text-secondary fw-bold fs-6">
              {user?.company_name}

            </Card.Subtitle>
          </div>
          <div>
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>Username:</td>

                  <td>{user?.user_name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user?.email}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{user?.phone_number ? user.phone_number : "not set"}</td>
                </tr>
                <tr>
                  <td>Subscription:</td>
                  <td>{user?.subscription ? "active" : "not subscribed"}</td>
                </tr>
                <tr>
                  <td>Employees:</td>
                  <td>{user?.job_seekers.length}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
      <Card className="shadow-sm mt-4">
        <span className="d-flex justify-content-end pe-4 pt-3"></span>
        <Card.Body>
          <span className="d-flex justify-content-between">
            <Card.Title className="fw-bold fs-4">About Me</Card.Title>
            <FontAwesomeIcon
              icon={faPencil}
              color="gray"
              style={{ cursor: "pointer" }}
              onClick={() => setEmployerAboutModalShow(true)}
            />
          </span>
          <Card.Text>
            {user?.employer ? user?.employer : "add brief description about yourself"}
          </Card.Text>
        </Card.Body>
      </Card>

      <EmployerProfilePicSectionModal
        show={profilePicModalShow}
        onHide={() => setProfilePicModalShow(false)}
      />
      <EmployerAboutModal
        show={employerAboutModalShow}
        onHide={() => setEmployerAboutModalShow(false)}
      />
    </div>
  );
};

export default EmployerProfile;
