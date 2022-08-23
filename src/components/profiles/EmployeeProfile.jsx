
import Card from 'react-bootstrap/Card';
import girlReviewImg from "../../images/ladyreview.jpg";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function EmployeeProfile() {
  return (
    
    <div className='container' >
      <div >
        
    <Card className="shadow p-3 mb-5 bg-white rounded mx-auto"   style={{ width: '50em', height:"20rem", context:"center", marginTop: "7em"}}>
    <FontAwesomeIcon icon={faPencil} className="mt-1" color="gray" fontSize={30} width="88rem"/>
     
      <Card.Body className='d-flex' style={{ width: '20rem',  height:"20rem", context:"center"}} >
      
      
        <div>
        <Card.Img variant="top"
            src={girlReviewImg}
            className="rounded-circle mx-auto"
            style={{ width: "15rem" }}></Card.Img>
        <Card.Title style={{ width: '20rem',fontFamily:"georgia",fontSize:"25px"}}>JobSeeker Name</Card.Title>
        </div>
        <div>
        <div className="" style={{ fontFamily:"georgia",fontSize:"100px",fontWeight:'bold'}}>
        <Card.Title >UserName</Card.Title>
        <Card.Subtitle>Email@gmail.com</Card.Subtitle>
        <Card.Subtitle>Phone</Card.Subtitle>
        <Card.Subtitle>Role</Card.Subtitle>
        <Card.Subtitle>Experience</Card.Subtitle>
        <Card.Subtitle>Available</Card.Subtitle>
        </div>
        </div>
        
        <Card.Text></Card.Text>
        
      </Card.Body>
    </Card>


    
    
    </div>
    </div>



  );
}

export default EmployeeProfile;