import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="linkstyle">
      <div className="productCard">
        <div className="cardLeft">
          <h3 className="productName">{product.name}</h3>
          <p className="productPrice">{product.price} €</p>
        </div>
        <img src={product.image} className="productImage" alt="product" />
      </div>
    </Link>
  );
}

export default Product;
