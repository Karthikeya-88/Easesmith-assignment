import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import PlantsAndPots from "./components/PlantsAndPots";
import Services from "./components/Services";
import Story from "./components/Story";
import Tools from "./components/Tools";
import ThankyouPage from "./components/ThankyouPage";
import AddToCart from "./components/AddToCart";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/plants" component={PlantsAndPots} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/story" component={Story} />
      <Route exact path="/tools" component={Tools} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/addtocart" component={AddToCart} />
      <Route exact path="/thankyoupage" component={ThankyouPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
