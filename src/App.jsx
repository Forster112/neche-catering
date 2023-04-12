import "./App.css";
import Routes from './routes/Routers'

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
