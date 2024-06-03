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

  const curUserFavorites = curUser ? curUser.favorites : [];

  const favoriteItems = menu.filter((item) =>
    curUserFavorites.some((favorite) => favorite.productId === item.id)
  );

  function signOut() {
    // Clear the current user and navigate to the login page
    // setCurUser(null);
    // nav("/login");
    console.log(favoriteItems);
  }

  // Extract curUserFavorites from curUser

  return (
    <>
      <Header></Header>
      <h1>This is the profile </h1>
      <h2>User Favorites:</h2>
      <ul>
        {favoriteItems.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </ul>
      <button onClick={signOut} className="menuButtons">
        Logout
      </button>
      <Footer></Footer>
    </>
  );
}

export default Profile;
