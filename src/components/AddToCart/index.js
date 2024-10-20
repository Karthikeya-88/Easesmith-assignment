import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./index.css";

export default function AddToCart() {
  return (
    <>
      <Header />
      <div className="add-to-cart-container">
        <h1 style={{ color: "#fff" }}>Your Product</h1>
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729335742/e1ce63ff429a0c018fd6e2e5dd614458_fuucae.png"
          alt="product-image"
          className="add-to-cart-product-image"
        />
        <h1
          className="add-to-cart-product-title"
          style={{ marginBottom: "10px" }}
        >
          Plant Name: Monsterra
        </h1>
        <p className="add-to-cart-product-description">
          Indoor Plant, Low maintenance
        </p>
        <div className="rating-scale">
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
            alt="rating-scale"
          />
          <span className="add-to-cart-product-rating"> 4.9</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="add-to-cart-product-actual-amount">
            Actual Price: ₹ 359{" "}
          </p>
          <p className="add-to-cart-product-discount-amount">
            Discount Price: ₹ 299
          </p>
        </div>
        <Link to="/cart">
          {" "}
          <button className="confirm-order">Confirm your Order</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
