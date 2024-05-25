import { Link } from "react-router-dom";

function Product({ product }) {
  function RemoveFromCart() {}
  function AddToCart() {}
  return (
    <Link to={`/product/${product.id}`} className="linkstyle">
      <div className="productCard">
        <div className="cardLeft">
          <h3 className="productName">{product.name}</h3>
          <p className="productPrice">{product.price} €</p>
        </div>
        <img src={product.image} className="productImage" alt="product" />
        {/* <div className="cartButtonContainer">
        <button className="cartButton" onClick={AddToCart}>
        +
        </button>
        <button className="cartButton" onClick={RemoveFromCart}>
        -
        </button>
      </div> */}
      </div>
    </Link>
  );
}

export default Product;
