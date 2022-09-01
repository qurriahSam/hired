import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import { signupUsers } from "../hooks/useUsers";

function SignupJobseeker() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  const [newJobseeker, setNewJobseeker] = React.useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "jobseeker",
    password: "",
    admin_id: 1,
  });

  const { mutate } = useMutation(signupUsers, {
    onSuccess: (data) => {
      if (data.id) {
        setUser(data);
        console.log("jobseeker signup success", data);
        navigate("/jobseekerprofile");
      } else {
        console.log("jobseeker signup error", data);
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(newJobseeker);
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewJobseeker({ ...newJobseeker, [key]: value });
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
        <Form.Group className="mb-3" controlId="formConfirmSignupPassword">
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
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignupJobseeker;
