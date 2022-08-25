import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { signupEmployer } from "../hooks/useUsers";

function SignupJobseeker() {
  const [user, setUser] = React.useState({});
  const [newEmployer, setNewEmployer] = React.useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "employer",
    password: "1",
    company_name: "",
    admin_id: "1",
  });

  const { mutate } = useMutation(signupEmployer, {
    onSuccess: (data) => {
      setUser(() => data);
      console.log(data);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(newEmployer);
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewEmployer({ ...newEmployer, [key]: value });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formSignupUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="user_name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupCompanyName">
          <Form.Label>Company:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            name="company_name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/*         <Form.Group className="mb-3" controlId="formConfirmSignupPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={handleChange}
          />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignupJobseeker;
