import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="linkstyle">
      <div className="productCard">
        <div className="productDetails">
          <h4 className="productName">{product.name}</h4>
          <img src={product.image} className="productImage" alt="product" />
          <p className="productPrice">{product.price} €</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
