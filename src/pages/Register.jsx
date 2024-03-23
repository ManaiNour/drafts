import axios from "axios";
import { Button } from "bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [auth, setAuth] = useState({});
  const navigate=useNavigate()
  const hundleRegister = (e) => {
    e.preventDefault()

    axios
      .post("http://localhost:5000/api/auth/register", auth)
      .then((res) =>{ 
        console.log(res.data);
        if(res.data.status==='success'){
            toast("well done")
            setTimeout(()=>{navigate('/login')},1000)
        }
    })
      .catch((e) => console.log(e));
  };

  return (
    <>     <ToastContainer />
    <Form
      style={{
        width: "60%",
        padding: "30px",
        background: "aqua",
        margin: "auto",
      }}
    >
      <Form.Group className="mb-3" controlId="sds">
        <Form.Label>name </Form.Label>
        <Form.Control
          type="text"
          placeholder="name"
          onChange={(e) => setAuth({ ...auth, name: e.target.value })}
        />
      </Form.Group>
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
      <button onClick={hundleRegister}> submit</button>
 
    </Form></>
  );
}

export default Register;