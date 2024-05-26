function CartItem({ product }) {
  console.log(product.qty);
  console.log(product.price);
  return (
    <div className="cartItemContainer">
      <div className="cartTop">
        <h3>{product.name}</h3>
        <img
          src={`${process.env.PUBLIC_URL}${product.image}`}
          alt="image of product"
          className="productImage cartItemImage"
        />
        <h3>{+product.price} €</h3>
      </div>

      <div className="">
        <div className="cartBottom">
          <div className="shopcartBtnContainer">
            <button className="cartButton">+</button>
            <p className="quantInput">{product.qty}</p>
            <button className="cartButton">-</button>
          </div>
          <div className="cartProductPrice">
            <h3>{+product.price * +product.qty} €</h3>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default CartItem;
