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
            <label className="caLbl">Username:</label>
            <input type="text" name="username" className="caInput" />
            <label className="caLbl">Password:</label>
            <input type="password" name="password" className="caInput" />
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
