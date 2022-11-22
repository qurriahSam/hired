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
    const [check, setCheck] = useState({
    user_name: false,
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    company_name: false,
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
    validChecker(key, value)
  };

  const handleCheck = (key) => {
    setCheck({ ...check, [key]: !check[key] });
  };

  const validChecker = (key, value) => {
    switch (key) {
      case "user_name":
        if(value.length < 3) {
          handleCheck(key)
          console.log("name is short", check[key])
        }
        break;
      case "first_name":
        if(value.length < 3) {
          handleCheck(key)
          console.log("name is short", check[key])
        }
        break;
      case "last_name":
        if(value.length < 3) {
          handleCheck(key)
          console.log("name is short", check[key])
        }
        break;
      case "email":
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
          console.log("wrong email")
        }
        break;
      case "password":
        if(value.length < 6) {
          console.log("password is too short")
        }
        break;
    
      default:
        break;
    }
  }

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
            Username is too short.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted" style={{ display: check.first_name ? "block" : "none"}}>
            Name is too short.
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
            Name is too short.
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
            Invalid Email
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignupEmail">
          <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted d-none">
            Enter valid email
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
           Password is too short.
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
            Passwords do not match
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
