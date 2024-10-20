import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./index.css";

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <p>Your Cart</p>
      <hr className="cart-horizontal-line" />
      <h3 className="cart-greetings">
        Congratulations <br /> Order Placed!
      </h3>
      <img
        src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729305965/plant_1_1_un3uke.png"
        alt="plant"
        className=""
      />
      <p className="cart-description">
        Thank you for choosing Chaperone services. <br /> We will soon get in
        touch with you!
      </p>
      <Link to="/plants" className="cart-button">
        <button type="button" className="cart-button">
          CONTINUE SHOPPING
        </button>
      </Link>
    </div>
    <Footer />
  </>
);

export default Cart;
