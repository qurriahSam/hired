
import Card from 'react-bootstrap/Card';
import girlReviewImg from "../../images/ladyreview.jpg";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
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

    <Card className="shadow p-3 mb-5 bg-white rounded mx-auto"   style={{ width: '50em', height:"20rem", context:"center", marginTop: "7em"}}>
    <FontAwesomeIcon icon={faPencil} className="mt-1" color="gray" fontSize={30} width="88rem"/>
     
      <Card.Body className='d-flex' style={{ width: '20rem',  height:"20rem"}} >
      
      
        <div>
        
        <Card.Title style={{ width: '44rem',fontFamily:"georgia",fontSize:"25px"}}>About Me</Card.Title>
        <Card.Subtitle style={{fontFamily:"times-new-roman", fontSize:"20px"}}>
          <p>I would describe myself my self now in four different parts. I would describe myself as a kind, generous and helpful person. I love to help my friends out by giving them advice with their problems, and by having their back whenever they need it from supporting them in activities such as going to band concerts to being there emotionally when a break up happens. I would also describe myself as a very artistic, imaginative and creative. I love to build and make things with my hands, especially in art. For example, I enjoy sculpting and creating tiny tiny creatures with clay. Thirdly, I would describe myself as a very intelligent, curious and wondrous person.</p>
        </Card.Subtitle>
        </div>
        
        
        <Card.Text></Card.Text>
        
        
      </Card.Body>
    </Card>

    <Card className="shadow p-3 mb-5 bg-white rounded mx-auto"   style={{ width: '50em', height:"30rem", context:"center", marginTop: "7em"}}>
    <FontAwesomeIcon icon={faCirclePlus} className="mt-1" color="gray" fontSize={30} width="88rem"/>
     <Card.Body className='d-flex' style={{ width: '20rem',  height:"20rem"}} >
      <div>
        <Card.Title style={{ width: '44rem',fontFamily:"georgia",fontSize:"30px"}}>Experience</Card.Title>
        <div>
        <Card.Subtitle style={{ width: '44rem',fontFamily:"georgia",fontSize:"25px"}}>Company Name</Card.Subtitle>
        <FontAwesomeIcon icon={faCirclePlus} className="mt-1" color="gray" fontSize={20} width="40rem"/>
        </div>
        <Card.Subtitle style={{fontFamily:"times-new-roman", fontSize:"20px"}}>
          <p>In addition, i am also labeled as the “Mediator”. This means that I am more introverted than extroverted and very disorganized. I am also dedicated and hardworking in reaching my goals and visions. In addition, being a mediator means that I’m open and flexible, but on the flip side that also means that I can be too impractical and take things too personally.</p>
        </Card.Subtitle>
        <Card.Title style={{ width: '44rem',fontFamily:"georgia",fontSize:"25px"}}>Company Name</Card.Title>
        <Card.Subtitle style={{fontFamily:"times-new-roman", fontSize:"20px"}}>
          <p>In addition, i am also labeled as the “Mediator”. This means that I am more introverted than extroverted and very disorganized. I am also dedicated and hardworking in reaching my goals and visions. In addition, being a mediator means that I’m open and flexible, but on the flip side that also means that I can be too impractical and take things too personally.</p>
        </Card.Subtitle>
        </div>
        
        
        <Card.Text></Card.Text>
        
        
      </Card.Body>
    </Card>
    
    </div>
    </div>



  );
}

export default EmployeeProfile;