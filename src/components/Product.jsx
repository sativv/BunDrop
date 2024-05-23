function Product({ product }) {
  return (
    <div className="productCard">
      <div className="productDetails">
        <h3 className="productName">{product.name}</h3>
        <img src={product.image} className="productImage" />
        <p className="productIngredients">{product.ingredients}</p>
      </div>
    </div>
  );
}

export default Product;
