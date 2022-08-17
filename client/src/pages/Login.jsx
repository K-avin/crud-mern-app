import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Login() {
//   const [cookies] = useCookies([]);
//   const navigate = matchPath();
//   useEffect(() => {
//     if (cookies.jwt) {
//       navigate("/");
//     }
//   }, [cookies, navigate]);

//   const [values, setValues] = useState({ email: "", password: "" });
//   const generateError = (error) =>
//     toast.error(error, {
//       position: "bottom-right",
//     });
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:8000/login",
//         {
//           ...values,
//         },
//         { withCredentials: true }
//       );
//       if (data) {
//         if (data.errors) {
//           const { email, password } = data.errors;
//           if (email) generateError(email);
//           else if (password) generateError(password);
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };
//   return (
//     <div className="form-auth">
//       <div className="card">
//         <Form onSubmit={(e) => handleSubmit(e)}>
//           <h2>Login to your Account</h2>
//           <Form.Group className="form-group">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) =>
//                 setValues({ ...values, [e.target.name]: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="form-group">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) =>
//                 setValues({ ...values, [e.target.name]: e.target.value })
//               }
//             />
//           </Form.Group>

//           {/* <Form.Group className="form-group">
//           <div className="custom-control custom-checkbox">
//             <Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
//             <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember me</Form.Label>
//           </div>
//         </Form.Group> */}

//           <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
//           <p className="forgot-password text-right">
//             Don't have an account ?<Link to="/register"> Register </Link>
//           </p>
//         </Form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
function Login() {
  const [cookies] = useCookies([]);
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
        "http://localhost:8000/login",
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
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter the email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter the password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <span className="forgot-password text-right">
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Login;
