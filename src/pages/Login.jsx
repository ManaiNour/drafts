import { Button } from "bootstrap";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "../utils/Axios";
import { authContext } from "../context/ContextAuth";
import { useNavigate } from "react-router-dom";

function Login() { 
  const [auth, setAuth] = useState({});
  const user=useContext(authContext)
  const navigate=useNavigate()
  const hundleLogin = (e) => {
    e.preventDefault();
    Axios.post("/api/auth/login", auth)
      .then((res) =>{ if(res.data.status==="success"){user.setAuth(res.data.data)
        localStorage.setItem("user",JSON.stringify(res.data.data))
      navigate('/')}
      else{
        alert(res.data.data)
      }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Form
      style={{
        width: "60%",
        padding: "30px",
        background: "aqua",
        margin: "auto",
      }}
    >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setAuth({ ...auth, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        />
      </Form.Group>
      <button onClick={hundleLogin}> submit</button>
    </Form>
  );
}

export default Login;