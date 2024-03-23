import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { authContext } from "../context/ContextAuth";
import { useContext } from "react";
import { CardContext } from "../context/ContextCard";

function Navigator() {
  const user = useContext(authContext);
  const clearUser = () => {
    user.setAuth(null);
    localStorage.removeItem("user");
  };
  const {card}=useContext(CardContext)
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" style={{ display: "flex", gap: "40px" }}>
            <Link to={"/"}>
              {" "}
              <p>Home</p>
            </Link>
            <Link to={"/products"}>
              {" "}
              <p>products</p>
            </Link>

            {!user.auth ? (
              <>
                <Link to={"/register"}>
                  <p>register</p>
                </Link>
                <Link to={"/login"}>
                  <p>login</p>
                </Link>
              </>
            ) : (
              <>  <Link to={"/login"}>
              <p onClick={clearUser}>logout</p>
               </Link>
               <Link to={"/myorders"}>
              <p >my orders</p>
               </Link>
           { card.length&&   <Link to={"/card"}>
                  <p>card</p>
                </Link>
               }

               {user.auth.role==="admin"?<Link to={"/dashbord"}> <p>dashbord</p></Link>:null}
               </>
              
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigator;