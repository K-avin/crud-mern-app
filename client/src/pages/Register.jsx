import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useHistory();
  
  useEffect(() => {
    if (cookies.jwt) {
      navigate.push("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate.push("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="form-auth">
      <div className="card">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h2>Register Account</h2>
          <Form.Group className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
               type="password"
               placeholder="Password"
               name="password"
               onChange={(e) =>
                 setValues({ ...values, [e.target.name]: e.target.value })
               }
            />
          </Form.Group>

          {/* <Form.Group className="form-group">
          <div className="custom-control custom-checkbox">
            <Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
            <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember me</Form.Label>
          </div>
        </Form.Group> */}

          <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
          <p className="forgot-password text-right">
          Already have an account ?<Link to="/login"> Login </Link>
          </p>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;