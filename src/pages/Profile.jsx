import Footer from "../components/Footer";
import Header from "../components/Header";
import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";

function Profile() {
  const { curUser, setCurUser } = useContext(userContext);
  const [menu, setMenuItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((menuData) => {
        setMenuItems(menuData);
      });
  }, []);

  useEffect(() => {
    // redirect if user is not logged in
    if (!curUser) {
      nav("/login");
    }
  }, [curUser, nav]);

  const curUserFavorites = curUser ? curUser.favorites : [];

  const favoriteItems = menu.filter((item) =>
    curUserFavorites.includes(item.id)
  );

  if (!curUser) {
    return null;
  }

  return (
    <>
      <div className="profileTop">
        <Header></Header>
        <h2>Your Favorites:</h2>
      </div>
      <div className="favoriteContainer">
        {favoriteItems.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>

      <Footer></Footer>
    </>
  );
}

export default Profile;
