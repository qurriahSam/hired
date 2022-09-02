import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import girlReviewImg from "../../images/placeholderimage.png";

const JobseekerCard = ({ jobseeker }) => {
  return (
    <Card className="mb-3 mx-auto mx-md-3 col" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={girlReviewImg}
        className="w-75 img-thumbnail img-fluid mx-auto mt-3"
      />
      <Card.Body>
        <div>
          <Table borderless size="sm">
            <tbody>
              <tr>
                <td className="fw-bold">Username:</td>
                <td>{jobseeker.user_name}</td>
              </tr>

              <tr>
                <td className="fw-bold">Role:</td>
                <td>{jobseeker.role}</td>
              </tr>
              <tr>
                <td className="fw-bold">Experience:</td>
                <td>
                  <span>{jobseeker.experience} </span>
                  <span>years</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button size="sm" disabled>
          Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobseekerCard;
