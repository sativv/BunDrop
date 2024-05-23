import { Link } from "react-router-dom";

function Product({ product }) {
  function RemoveFromCart() {}
  function AddToCart() {}
  return (
    <div className="productCard">
      <div className="productDetails">
        <div className="cardLeft">
          <h4 className="productName">{product.name}</h4>
          <p className="productPrice">{product.price} €</p>
        </div>
        <Link to={`/product/${product.id}`} className="linkstyle">
          <img src={product.image} className="productImage" alt="product" />
        </Link>
        <div className="cartButtonContainer">
          <button className="cartButton" onClick={AddToCart}>
            +
          </button>
          <button className="cartButton" onClick={RemoveFromCart}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
