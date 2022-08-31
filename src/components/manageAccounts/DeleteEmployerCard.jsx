import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import girlReviewImg from "../../images/ladyreview.jpg";
import Table from "react-bootstrap/Table";

const DeleteEmployerCard = ({
  employer: { id, company_name, email, subscription },
  deleteUser,
}) => {
  const handleDelete = () => {
    deleteUser(id);
  };
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
                <td className="fw-bold">Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td className="fw-bold">Company:</td>
                <td>{company_name}</td>
              </tr>
              <tr>
                <td className="fw-bold">Subscribed:</td>
                <td>{`${subscription}`}</td>
              </tr>
              <tr>
                <td className="fw-bold">Hires:</td>
                <td>5</td>
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

export default DeleteEmployerCard;
