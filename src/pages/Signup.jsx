import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Header></Header>

      <div className="loginContainer">
        <h1>Create an account</h1>
        <div>
          <form className="signupForm">
            <label>Username:</label>
            <input type="text" name="username" />
            <label>Password:</label>
            <input type="password" name="password" />
            <input type="submit" value="Create Account" />
          </form>
        </div>

        <Link to={"/login"}>
          Already have an account? Press here to sign in!
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Signup;
