import React, { useContext, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { UserContext } from "../../userContext/userContext";
import { signin } from "../hooks/useUsers";
import loginImg from "../../images/ask2nbgbc.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setUser } = useContext(UserContext);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { mutate } = useMutation(signin, {
    onSuccess: (data) => {
      if (data.id) {
        setUser(() => data);
        if (data.role === "jobseeker") {
          navigate("/jobseekerprofile");
        }
      } else {
        console.log(data.error);
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(loginUser);
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginUser({ ...loginUser, [key]: value });
  };

  return (
    <div
      className="container mt-5 pt-3 d-md-flex justify-content-around"
      style={{ maxHeight: "90vh" }}
    >
      <div className="d-none d-md-block">
        <Image src={loginImg} alt="cover" fluid className="mh-100" />
      </div>
      <div style={{ minWidth: "300px" }}>
        <h2 className="fw-bold">Signin</h2>
        <div className="overflow-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formSigninUsernameOrEmail">
              <Form.Label>Username/Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username/Email"
                name="email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted d-none">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSigninPassword">
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
