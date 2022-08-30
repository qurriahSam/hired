import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import girlReviewImg from "../../images/ladyreview.jpg";
import Table from "react-bootstrap/Table";

const DeleteEmployeeCard = ({
  jobseeker: { id, first_name, last_name, email, profile },
  deleteUser,
}) => {
  const handleDelete = () => {
    deleteUser(id);
  };
  return (
    <Card id={`${id}`} className="mb-3 mx-auto mx-md-3 col" style={{ width: "20rem" }}>
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
                <td className="fw-bold">Name:</td>
                <td>
                  <span>{first_name}</span>
                  <span>{last_name}</span>
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td className="fw-bold">Role:</td>
                <td>{profile?.description ? profile.description : "not updated"}</td>
              </tr>
              <tr>
                <td className="fw-bold">Status:</td>
                <td>{profile?.employer_id ? "employed" : "unemployed"}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete User
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DeleteEmployeeCard;
