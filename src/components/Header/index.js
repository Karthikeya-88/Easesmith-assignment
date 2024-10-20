import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiCart } from "react-icons/bi";
import "./index.css";

const Header = () => (
  <>
    <div className="top-header">
      <p className="free-shipping">Free Shipping on orders above 999/-</p>
      <p className="contact-num">Call us on: +91 98768 05120</p>
    </div>
    <nav>
      <div className="navigation">
        <div>
          <NavLink
            activeClassName="active"
            to="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729271281/image_55_1_iyzr76.png"
              alt="logo"
              className="logo"
            />
            <h2 className="logo-name">Chaperone</h2>
          </NavLink>
        </div>
        <ul className="nav-bar-ul">
          <li>
            {" "}
            <NavLink
              activeClassName="active"
              to="/"
              className="nav-bar-li"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              activeClassName="active"
              to="/plants"
              className="nav-bar-li"
            >
              Plants & Pots
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-bar-li"
              to="/tools"
            >
              Tools
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-bar-li"
              to="/services"
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="nav-bar-li" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-bar-li"
              to="/story"
            >
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="nav-bar-li" to="/faq">
              FAQs
            </NavLink>
          </li>
        </ul>
        <div className="profile-cart">
          <div className="my-profile">
            <CgProfile className="profile-logo" />
            <a className="profile-name" href="/">
              My Profile
            </a>
          </div>
          <div>
            <NavLink activeClassName="active" to="/cart" className="cart">
              <BiCart className="cart-logo" />
              <a className="cart-name" href="/cart">
                Cart
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
