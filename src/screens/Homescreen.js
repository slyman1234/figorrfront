import Footer from "../components/homecomponents/Footer";
import Homebody from "../components/homecomponents/Homebody";
import Homeheader from "../components/homecomponents/Homeheader";
import Product from "../components/homecomponents/Product";

const Homescreen = () => {
  return (
    <div>
      <Homeheader />
      <Homebody />
      <Product/>
      <Footer />
    </div>
  );
};

export default Homescreen;
