import Navbar from "./component/Navbar";
import { Routes ,Route } from "react-router-dom";
import Home from './component/Home'
import Coin from './component/Coin'
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
