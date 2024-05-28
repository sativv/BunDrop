import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create user object
    const newUser = {
      username: username,
      password: password,
    };

    if (username.length === 0) {
      alert("Username is required");
      return;
    }

    if (username.length < 6) {
      alert("Username must be at least 6 characters long");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and contain at least one number"
      );
      return;
    }

    try {
      // sending get request from server to see if username already exists
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      if (users.some((user) => user.username === username)) {
        alert("Username already exists");
        return;
      }
      // sending post request to server
      const postResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (postResponse.ok) {
        alert(`Account successfully created, welcome ${username}`);
        nav("/login");
      } else {
        alert("Accoun creation failed");
      }
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="loginContainer">
        <h1>Create an account</h1>
        <div>
          <form onSubmit={handleSubmit} className="signupForm">
            <label className="caLbl">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className=" caInput"
            />
            <label className="caLbl">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" caInput"
            />
            <input type="submit" value="Create Account" className="caBtn " />
          </form>
        </div>
        <Link to={"/login"} className="returnLink">
          Already have an account? Press here to sign in!
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
