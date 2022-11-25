import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AcceptDecline() {
  return (
    <div className="container  mt-3" style={{ maxWidth: "40em" }}>
      <Card className="shadow-sm">
        <span className="d-flex justify-content-end pe-4 pt-3"></span>
        <Card.Body>
          <Card.Title className="fw-bold fs-4">Company name</Card.Title>
          <Card.Title className="fw-bold fs-6 text-secondary">Role</Card.Title>

          <Card.Text>
            Once the essential functions are defined, the employer can make a determination as to
            whether the functions are essential or marginal. The use of the term "essential
            function" should be part of the job description, and it should explicitly state how an
            individual is to perform the job.
          </Card.Text>
          <div className="mb-2 d-flex justify-content-end">
            <Button variant="success" size="sm">
              Accept
            </Button>

            <Button variant="danger" size="sm" className="ms-3">
              Decline
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AcceptDecline;
