import Navbar from "../../component/Navbar";
import Banner from "../../component/Baanner";
import IntruductionSection from "../../component/IntruductionSection";
import ProductionSection from "../../component/ProductionSection";
import NewsSection from "../../component/NewsSection";
import Footer from "../../component/Footer";


export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <IntruductionSection />
      <ProductionSection />
      <NewsSection />
      <Footer />
    </div>
  )
}
