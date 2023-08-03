import Productimg from "../../img/products.png";

const Product = () => {
  return (
    <div className="md:px-[50px] px-[20px] bg-blue-100 pb-[50px] pt-[50px] w-full">
      <div>
        <h3 className="text-[50px] font-[800] text-[#213f7a]">Our Insurance</h3>
        <p className="mt-[20px]">
          Discover comprehensive and reliable insurance policies tailored to
          your needs.
        </p>

        <div className="mt-[50px] pb-[50px] flex justify-between w-full">
          <div className="md:flex hidden w-full">
            <img src={Productimg} alt="products" />
          </div>
          <div className="md:ml-[20px]">
            <div className=" bg-white rounded-[5px] p-[20px] shadow-md">
              <h2 className="font-[800] text-[20px] text-[#213f7a]">
                Health Insurance
              </h2>
              <p>
                {" "}
                Ensure your well-being with our comprehensive health insurance
                plans. From routine check-ups to unexpected medical needs, our
                policies offer peace of mind and financial protection
              </p>
            </div>
            <div className=" bg-white rounded-[5px] p-[20px] shadow-md mt-[20px] ">
              <h2 className="font-[800] text-[20px] text-[#213f7a]">
                Motor Insurance
              </h2>
              <p>
                {" "}
                Drive with confidence and security. Our motor insurance policies
                offer comprehensive protection for your vehicle against
                accidents, theft, and damages.
              </p>
            </div>
            <div className=" bg-white rounded-[5px] p-[20px] shadow-md mt-[20px] ">
              <h2 className="font-[800] text-[20px] text-[#213f7a]">
                Gadget Insurance
              </h2>
              <p>
                {" "}
                Safeguard your valuable gadgets with our reliable gadget
                insurance. Whether it's a smartphone, laptop, tablet, or any
                electronic device, our policies provide protection against
                accidental damage, theft, and breakdowns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
