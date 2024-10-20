import { FaFacebook } from "react-icons/fa";
import {
  FaYoutube,
  FaLinkedin,
  FaSquareThreads,
  FaInstagram,
} from "react-icons/fa6";
import "./index.css";

export default function Footer() {
  return (
    <>
      <div className="ultimate-footer">
        <div className="footer-first-container">
          <div className="subscibe-newsletter-container">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p>
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <div>
              <input
                type="text"
                placeholder="Enter your email address"
                className="email-input"
              />
              <button type="button" className="subscribe-button">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="about-us">
            <ul>
              <h3>ABOUT US</h3>
              <p>Our Story</p>
              <p>Blogs</p>
              <p>Careers</p>
              <p>Contact Us</p>
              <p>Help & Support</p>
            </ul>
          </div>
          <div className="about-us">
            <ul>
              <h3>OUR SERVICES</h3>
              <p>Book Maali</p>
              <p>Plant Day Care</p>
              <p>Rent Plants</p>
              <p>Plants & Pots</p>
              <p>Gardening Tools</p>
            </ul>
          </div>
          <div className="about-us">
            <ul>
              <h3>USEFUL LINKS</h3>
              <p>My Account</p>
              <p>Orders & Returns</p>
              <p>Track Orders</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Return, Refund & Replacement Policy</p>
            </ul>
          </div>
          <div className="get-in-touch">
            <ul>
              <h3>GET IN TOUCH</h3>
              <p>
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                Gurgaon, Haryana, India 122003
              </p>
              <p>Call: +919958287272 </p>
              <p>Email: care@chaperoneplants.com</p>
            </ul>
          </div>
        </div>
        <div className="company-details-container">
          <h2>CHAPERONE</h2>
          <p className="company-description">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
          <h3>Follow us on</h3>
          <div className="follow-us-social">
            <FaInstagram className="social-media-icons" />
            <FaFacebook className="social-media-icons" />
            <FaSquareThreads className="social-media-icons" />
            <FaYoutube className="social-media-icons" />
            <FaLinkedin className="social-media-icons" />
          </div>
        </div>
        <hr />
        <div className="copyrights-contiainer">
          © 2023, chaperone.com All rights reserved.
        </div>
      </div>
    </>
  );
}
