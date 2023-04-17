import "./App.css";
import Routes from "./routes/Routers";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector(
    (state) => state.cartUi.cartIsVisible
  );

  return (
    <div className="App">
      <Header />
      {showCart && <Cart />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
