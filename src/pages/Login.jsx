import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { userContext } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { curUser, setCurUser } = useContext(userContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((userData) => {
        setUsers(userData);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (users.length === 0) {
      // Users data is still loading
      return;
    }

    const user = users.find((user) => user.username === formData.username);
    console.log(user);

    if (!user) {
      // User not found
      setErrorMessage("User not found");
      return;
    }

    if (user.password !== formData.password) {
      // Incorrect password
      setErrorMessage("Incorrect password");
      return;
    }

    // Login successful
    setCurUser(user);
    nav("/profile");
  };

  return (
    <>
      <Header></Header>
      <div className="loginContainer">
        <h1>Log in</h1>
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div>
          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="caLbl">Username:</label>
            <input
              type="text"
              name="username"
              className="caInput"
              value={FormData.username}
              onChange={handleChange}
              required
            />
            <label className="caLbl">Password:</label>
            <input
              type="password"
              name="password"
              className="caInput"
              value={FormData.password}
              onChange={handleChange}
              required
            />
            <input type="submit" value="Login" className="caBtn" />
          </form>
        </div>

        <Link to={"/signup"} className="returnLink">
          Don't have an account? Press here to sign up!
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
