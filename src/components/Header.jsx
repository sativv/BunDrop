import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/smallLogo.png`}
          className="logo"
          alt="company logotype"
        />
      </Link>

      {/* <Link to={"/orders"} className="linkstyle">
        <div className="headerRight">
          <h3>Orders</h3>
          <FontAwesomeIcon
            icon={faCashRegister}
            style={{ width: "1em" }}
            className="orderIcon"
            size="2x"
          />
        </div>
      </Link> */}
    </div>
  );
}

export default Header;
