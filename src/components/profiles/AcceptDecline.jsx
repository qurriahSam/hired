import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AcceptDecline() {
  return (
    <Card className="shadow p-3 mb-5 bg-white rounded mx-auto"   style={{ width: '50em', height:"30rem", context:"center", marginTop: "7em"}}>
      <Card.Header style={{ width: '15rem',fontFamily:"georgia",fontSize:"30px",marginLeft:"1%"}}>Company name</Card.Header>
      <Card.Subtitle style={{ width: '25rem',fontFamily:"georgia",fontSize:"25px", marginTop:"1rem", marginLeft:"2rem"}}>Job description</Card.Subtitle>
      <Card.Body >
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" className="btn btn-primary btn-lm bg_amber_300" style={{ width: '5rem',  height:"2rem", marginLeft:"35rem", marginTop:"15rem"}}>Decline</Button>
        <Button variant="primary" className="btn btn-secondary btn-lm" style={{ width: '5rem',  height:"2rem", marginLeft:"20rem",marginBottom:"10rem"}}>Accept</Button>
      </Card.Body>
    </Card>
  );
}

export default AcceptDecline;