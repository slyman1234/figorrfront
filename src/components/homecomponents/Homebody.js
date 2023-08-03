import { Link } from "react-router-dom";
import Insureimg from "../../img/insureimg.png";
const Homebody = () => {
  return (
    <div className="md:flex justify-between mt-[100px] md:px-[50px] px-[20px] pb-[50px]">
      <div className="md:hidden">
        <img src={Insureimg} alt="insure ima" />
      </div>
      <div>
        <h2 className="md:text-[50px] text-[40px] font-[800] text-[#213f7a]">
          Partner with Us
        </h2>
        <h2 className="md:text-[50px] font-[500] text-[30px]">
          for Exceptional Insurance Packages
        </h2>
        <p>Give your customers the best insurance coverage</p>
        <div className="mt-[50px]">
          <Link
            to="/register"
            className="bg-[#213f7a] p-[10px] rounded-[5px] mt-[50px] text-green-400"
          >
            Get Started Now
          </Link>
        </div>
      </div>
      <div className="md:flex hidden">
        <img src={Insureimg} alt="insure ima" />
      </div>
    </div>
  );
};

export default Homebody;
