import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Banner from "./component/Baanner";
import IntruductionSection from "./component/IntruductionSection";
import ProductionSection from "./component/ProductionSection";
import NewsSection from "./component/NewsSection";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <IntruductionSection />
        <ProductionSection />
        <NewsSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
