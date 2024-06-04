import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { userContext, orderContext } from "../App";
import { useContext } from "react";

function Header() {
  const { curUser, setCurUser } = useContext(userContext);
  const { curOrder } = useContext(orderContext);

  function handleLogout() {
    setCurUser(null);
  }

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/smallLogo.png`}
          className="logo"
          alt="company logotype"
        />
      </Link>
      {/* <Link to={"/orderstatus"}>
        {curOrder && (
          <FontAwesomeIcon
            icon={faCashRegister}
            size="2x"
            className="cashRegisterIcon"
          />
        )}
      </Link> */}

      {curUser && (
        <button onClick={handleLogout} className="signoutBtn">
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Header;
