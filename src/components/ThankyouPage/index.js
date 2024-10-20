import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

export default function ThankyouPage() {
  return (
    <>
      <Header />
      <div className="thank-you-container">
        <h2>Thank You</h2>
        <p>Your support for our business is very much appreciated</p>
      </div>
      <Footer />
    </>
  );
}
