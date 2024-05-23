import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Header></Header>

      <div className="loginContainer">
        <h1>Log in</h1>
        <div>
          <form className="loginForm">
            <label>Username:</label>
            <input type="text" name="username" />
            <label>Password:</label>
            <input type="password" name="password" />
            <input type="submit" value="Login" />
          </form>
        </div>

        <Link to={"/signup"}>
          Don't have an account? Press here to sign up!
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
