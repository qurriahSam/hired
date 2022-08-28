import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function JobSeekerVarification() {
  return (
    <div className="container" style={{ maxWidth: "40em" }}>
      <Card className="shadow-sm mt-4">
        <span className="d-flex justify-content-end pe-4 pt-3"></span>
        <Card.Body>
          <span className="d-flex justify-content-between mb-2">
            <span>
              <Card.Title className="fw-bold fs-5">Employee Name</Card.Title>
              <Card.Subtitle className="fw-bold text-secondary">position</Card.Subtitle>
            </span>
            <Card.Subtitle>Declined</Card.Subtitle>
          </span>
          <Card.Text>
            Once the essential functions are defined, the employer can make a determination as to
            whether the functions are essential or marginal. The use of the term "essential
            function" should be part of the job description, and it should explicitly state how an
            individual is to perform the job.
          </Card.Text>
          <div className="mb-2 d-flex justify-content-end">
            <Button variant="danger" size="sm">
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobSeekerVarification;
