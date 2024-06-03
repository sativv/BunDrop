import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBurger,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { userContext } from "../App";
import { useContext } from "react";

function Footer() {
  const location = useLocation();

  const { curUser } = useContext(userContext);

  const isActivePage = (path) => {
    return location.pathname === path ? "activeIcon" : "";
  };
  return (
    <div className="FooterBar ">
      <Link to="/" className={isActivePage("/ourmenu")}>
        <FontAwesomeIcon
          icon={faHouse}
          size="2x"
          className={`footerIcons ${
            isActivePage("/") ? "activeIconStyle" : "inactiveIconStyle"
          }`}
        />
      </Link>
      <Link to="/ourmenu">
        <FontAwesomeIcon
          icon={faBurger}
          size="2x"
          className={`footerIcons ${
            isActivePage("/ourmenu") ? "activeIconStyle" : "inactiveIconStyle"
          }`}
        />
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2x"
          style={{ width: "1em" }}
          className={`footerIcons ${
            isActivePage("/cart") ? "activeIconStyle" : "inactiveIconStyle"
          }`}
        />
      </Link>
      {curUser ? (
        <Link to="/profile">
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            style={{ width: "1em" }}
            className={`footerIcons ${
              isActivePage("/profile") ? "activeIconStyle" : "inactiveIconStyle"
            }`}
          />
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            style={{ width: "1em" }}
            className={`footerIcons ${
              isActivePage("/login") ? "activeIconStyle" : "inactiveIconStyle"
            }`}
          />
        </Link>
      )}
    </div>
  );
}

export default Footer;
