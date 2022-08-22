import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formSignupUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Username" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmSignupPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
