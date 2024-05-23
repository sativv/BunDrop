import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faBurger,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="FooterBar">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          style={{ width: "1em" }}
          className="footerIcons"
        />
      </Link>
      <Link to="/ourmenu">
        <FontAwesomeIcon
          icon={faBurger}
          style={{ width: "1em" }}
          className="footerIcons"
        />
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ width: "1em" }}
          className="footerIcons"
        />
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon
          icon={faUser}
          style={{ width: "1em" }}
          className="footerIcons"
        />
      </Link>
    </div>
  );
}

export default Footer;
