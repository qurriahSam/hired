import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AcceptDecline() {
  return (
    <div className='row'>
    <Card className="shadow p-3 mb-5 bg-white rounded mx-auto"   style={{ width: '50em', height:"30rem", context:"center", marginTop: "7em"}}>
      <Card.Title style={{ width: '15rem',fontFamily:"georgia",fontSize:"30px",marginLeft:"1%"}}>Company name</Card.Title>
      <Card.Subtitle style={{ width: '25rem',fontFamily:"georgia",fontSize:"25px", marginTop:"1rem", marginLeft:"2rem"}}>Job description</Card.Subtitle>
      <Card.Body >
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div style={{ width: '15rem',fontFamily:"georgia",fontSize:"30px",marginTop:"15rem", marginLeft:"35rem"}}>
        <div className="mb-2">
        <Button variant="success" size="lm" active>
          Accept
        </Button>{''}
        <Button variant="danger" size="lm" active>
          Decline
        </Button>
      </div>
      </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AcceptDecline;