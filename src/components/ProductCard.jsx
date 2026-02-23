import "./ProductCard.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p className="price">₹ {price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;