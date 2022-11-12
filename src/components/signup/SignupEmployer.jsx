import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext/userContext";
import { signupEmployer } from "../hooks/useUsers";

function SignupJobseeker() {
  const { setUser } = useContext(UserContext);
  const [newEmployer, setNewEmployer] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "employer",
    password: "",
    company_name: "",
    admin_id: "1",
  });
  const navigate = useNavigate();

  const { mutate } = useMutation(signupEmployer, {
    onSuccess: (data) => {
      if (data.id) {
        setUser(data);
        console.log("employer signup success", data);
        navigate("/dashboard");
      } else {
        console.log("employer signup error", data);
      }
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
    <div className="overflow-auto">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formSignupUsername">
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
          <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupPassword">
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
