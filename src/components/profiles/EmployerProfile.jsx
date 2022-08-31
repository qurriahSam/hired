import React, { useContext } from "react";
import girlReviewImg from "../../images/ladyreview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { UserContext } from "../../userContext/userContext";

const EmployerProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="container mt-3" style={{ maxWidth: "40em" }}>
      <Card className="shadow-sm">
        <span className="d-flex justify-content-end pe-4 pt-3">
          <FontAwesomeIcon icon={faPencil} color="gray" />
        </span>
        <Card.Body className="d-md-flex justify-content-around">
          <div>
            <Card.Img
              variant="top"
              src={girlReviewImg}
              className="rounded-circle mx-auto"
              style={{ maxWidth: "10em" }}
            ></Card.Img>
            <Card.Title className="fw-bold pt-2">
              {user.first_name} {user.last_name}
            </Card.Title>
            <Card.Subtitle className="text-secondary fw-bold fs-6">
              {user.company_name}
            </Card.Subtitle>
          </div>
          <div>
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
                  <td>{user.phone_number ? user.phone_number : "not set"}</td>
                </tr>
                <tr>
                  <td>Subscription:</td>
                  <td>{user.subscription ? "active" : "not subscribed"}</td>
                </tr>
                <tr>
                  <td>Employees:</td>
                  <td>{user.job_seekers.length}</td>
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
    </div>
  );
};

export default EmployerProfile;
