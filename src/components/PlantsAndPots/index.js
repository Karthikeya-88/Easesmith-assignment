import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ReactSlick from "../Slick";

import { FiSearch } from "react-icons/fi";
import "./index.css";

class PlantsAndPots extends Component {
  state = { searchValue: "" };

  onChangeSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <Header />
        <div className="ultimate-pp-container">
          <div className="input-container">
            <FiSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search Plant"
              className="input-element"
              value={searchValue}
              onChange={this.onChangeSearch}
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729324681/image_91_mbmzst.png"
              alt="search-plant-icon"
              className="search-plant-icon"
            />
          </div>
          <div className="plant-pot-buttons">
            <button type="button" className="plants-button">
              Plants
            </button>
            <button type="button" className="pot-button">
              Pots
            </button>
          </div>
          <p className="plants-description">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
          <div>
            <h2 style={{ fontSize: "24px" }}>Nursury</h2>
            <div className="slider-container">
              <ReactSlick />
            </div>
          </div>
          <div className="filter-plant-details-container">
            <div className="filters-container">
              <ul className="filters-ul">
                <li>Filter</li>
                <li>CLEAR ALL</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Type of Plants</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Price</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Nursury</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Ideal Plants Location</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Indoor/Outdoor</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Maintenance</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Plant Size</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Water Schedule</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Color</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Seasonal</li>
                <li>+</li>
              </ul>
              <hr className="filters-horizontal" />
              <ul className="filters-ul">
                <li>Light Efficient</li>
                <li>+</li>
              </ul>
            </div>
            <div className="remaining-content">
              <div className="sort-by-options">
                <p style={{ color: "#6A6A6A" }}>300 products</p>
                <select className="sortby-button">
                  <option>SORT BY</option>
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
              </div>
              <div className="product-details-container">
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729335742/e1ce63ff429a0c018fd6e2e5dd614458_fuucae.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339147/7973d62829a030074ad8b6ad34_bcvgtd.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339198/daa994fdb511faa82ea79a5ef58fbb1a_pkptx6.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729335742/e1ce63ff429a0c018fd6e2e5dd614458_fuucae.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339147/7973d62829a030074ad8b6ad34_bcvgtd.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339198/daa994fdb511faa82ea79a5ef58fbb1a_pkptx6.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729335742/e1ce63ff429a0c018fd6e2e5dd614458_fuucae.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339147/7973d62829a030074ad8b6ad34_bcvgtd.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
                <div className="product-details">
                  <img
                    src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729339198/daa994fdb511faa82ea79a5ef58fbb1a_pkptx6.png"
                    alt="product-image"
                    className="product-image"
                  />
                  <Link to="/thankyoupage" className="view-product-button">
                    <button type="button" className="view-product-button">
                      View Product
                    </button>
                  </Link>
                  <h3 className="product-title">Monsterra</h3>
                  <p className="product-description">
                    Indoor Plant, Low maintenance
                  </p>
                  <div className="rating-scale">
                    <img
                      src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729336196/image_10_uslypi.png"
                      alt="rating-scale"
                    />
                    <span className="rating">4.9</span>
                  </div>
                  <div className="discount-amount-container">
                    <p className="actual-amount">₹ 359 </p>
                    <p className="discount-amount">₹ 299</p>
                  </div>
                  <div>
                    <Link to="/addtocart" className="add-to-cart">
                      <button type="button" className="add-to-cart">
                        <span>- </span> Add to cart <span> +</span>
                      </button>
                    </Link>
                    <button type="button" className="buy-on-rent">
                      Buy on Rent
                    </button>
                  </div>
                </div>
              </div>
              <div className="view-more-container">
                <button type="button" className="view-more">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default PlantsAndPots;
