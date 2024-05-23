function Product({ product }) {
  return (
    <div className="productCard">
      <div className="productDetails">
        <h4 className="productName">{product.name}</h4>
        <img src={product.image} className="productImage" alt="product" />
        <p className="productPrice">{product.price} €</p>
      </div>
    </div>
  );
}

export default Product;
