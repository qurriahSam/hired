import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import girlReviewImg from "../../images/placeholderimage.png";

const EmployeeCard = () => {
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
                <td className="fw-bold">Name:</td>
                <td>
                  <span>first</span>
                  <span> last</span>
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Email:</td>
                <td>sample@gmail.com</td>
              </tr>
              <tr>
                <td className="fw-bold">Role:</td>
                <td>Web developer</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Button variant="danger" size="sm">
          Terminate
        </Button>{" "}
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
