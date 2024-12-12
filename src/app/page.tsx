import Image from "next/image";
import lamp from "../../public/assets/image 32.png";
import sofa from "../../public/assets/sofa promotional header.png";
import product from "../../public/assets/Component 3.png";
import product01 from "../../public/assets/Component 4.png";
import feature from "../../public/assets/Featured product.png";
import feature01 from "../../public/assets/Featured product (1).png";
import image from "../../public/assets/Component 9.png";
import image01 from "../../public/assets/Component 10.png";
import image02 from "../../public/assets/Component 11.png";
import image03 from "../../public/assets/Component 12.png";
import image04 from "../../public/assets/Leatest product.png";
import specialsofa from "../../public/assets/unique feature sofa.png";
import trending from "../../public/assets/Trending products.png";
import trending01 from "../../public/assets/Trending products (1).png";
import trending02 from "../../public/assets/Trending products (2).png";
import trending03 from "../../public/assets/Trending products (3).png";
import group from "../../public/assets/Group 154.png";
import group01 from "../../public/assets/Group 155.png";
import list from "../../public/assets/Trnding products list.png";
import list01 from "../../public/assets/Trnding products list (1).png";
import list02 from "../../public/assets/Trnding products list (2).png";
import brownsofa from '../../public/assets/Group 154 (1).png'
import top from '../../public/assets/Top catagories.png'
import top01 from '../../public/assets/Top catagories (1).png'
import top02 from '../../public/assets/Top catagories (2).png'
import top03 from '../../public/assets/Top catagories (3).png'
import externalsofa from '../../public/assets/Group 162.png'
import iconimg from '../../public/assets/icons-img.png'
import blog from '../../public/assets/Leatest blog.png'
import blog01 from '../../public/assets/Leatest blog (1).png'
import blog02 from '../../public/assets/Leatest blog (2).png'
import free from '../../public/assets/free-delivery.png'
import free01 from '../../public/assets/free delivery 1.png'
import free02 from '../../public/assets/free delivery 2.png'
import free03 from '../../public/assets/free delivery 3.png'
export default function Home() {
  return (
    <div>

<div className="bg-[#F2F0FF] h-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-16 lg:mt-6 mt-6 ">
  {/* Lamp Image Section */}
  <div className="flex justify-center w-full md:w-auto">
    <Image src={lamp} alt="lamp" className="w-full max-w-[300px] md:max-w-[500px] lg:relative bottom-20"/>
  </div>

  {/* Text Content Section */}
  <div className="relative text-center md:text-left md:top-40 md:right-10 flex flex-col items-center md:items-start mt-6 md:mt-0">
    <span className="text-[#FB2E86] text-lg md:text-xl lg:relative bottom-20">
      Best Furniture For Your Castle....
    </span>
    <h1 className="text-[34px] sm:text-[45px] md:text-[53px] leading-tight text-[#0D0E43] mt-4 l lg:relative bottom-20">
      New Furniture Collection <br />
      Trends in 2020
    </h1>
    <p className="text-[#8A8FB9] text-sm md:text-base mt-4 l lg:relative bottom-20">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
      est adipiscing in phasellus non in justo.
    </p>
    <button className="mt-8 w-[163px] h-[53px] bg-[#FB2E86] rounded-sm text-white text-center text-sm md:text-base l lg:relative bottom-24">
      Shop Now
    </button>
  </div>

  {/* Sofa Image Section */}
  <div className="flex justify-center w-full md:w-auto mt-6 md:mt-0">
    <Image src={sofa} alt="sofa" className="w-full max-w-[300px] md:max-w-[500px]"/>
  </div>
</div>


<div className="py-8 px-4 md:px-16">
  {/* Featured Products Section */}
  <h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    Featured Products
  </h1>
  <div className="flex justify-center flex-wrap gap-5 mt-10">
    <Image src={product} alt="img" className="w-[150px] md:w-[200px] lg:w-[300px]" />
    <Image src={product01} alt="img" className="w-[150px] md:w-[200px]  lg:w-[300px]" />
    <Image src={feature} alt="img" className="w-[150px] md:w-[200px]  lg:w-[300px]" />
    <Image src={feature01} alt="img" className="w-[150px] md:w-[200px]  lg:w-[300px]" />
  </div>
  <div className="flex justify-center gap-2 md:gap-4 mt-4">
    <div className="w-8 md:w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
    <div className="w-8 md:w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
    <div className="w-8 md:w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
  </div>

  {/* Latest Products Section */}
  <h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    Latest Products
  </h1>
  <div className="flex justify-center gap-4 md:gap-10 text-[14px] md:text-[18px] font-normal mt-8 flex-wrap">
    <a href="" className="text-[#FB2E86] underline">
      New Arrival
    </a>
    <a href="" className="text-[#151875]">
      Best Seller
    </a>
    <a href="" className="text-[#151875]">
      Featured
    </a>
    <a href="" className="text-[#151875]">
      Special Offer
    </a>
  </div>
  <div className="flex justify-center flex-wrap gap-5 mt-10">
    <Image src={image} alt="img" className="w-[150px] md:w-[200px]" />
    <Image src={image01} alt="img" className="w-[150px] md:w-[200px]" />
    <Image src={image02} alt="img" className="w-[150px] md:w-[200px]" />
    <Image src={image03} alt="img" className="w-[150px] md:w-[200px]" />
    <Image src={image} alt="img" className="w-[150px] md:w-[200px]" />
    <Image src={image04} alt="img" className="w-[150px] md:w-[200px]" />
  </div>

  {/* Shopex Offer Section */}
  <h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    What Shopex Offer!
  </h1>
  <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 flex-wrap">
    <div className="w-full md:w-[270px] h-auto bg-white text-center p-6 shadow-md rounded-md">
      <Image src={free} alt="img" className="m-auto mt-4 w-[60px]" />
      <h1 className="text-[18px] md:text-[22px] text-[#151875] mt-4">
        24/7 Support
      </h1>
      <p className="text-[#1A0B5B4D] mt-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
    <div className="w-full md:w-[270px] h-auto bg-white text-center p-6 shadow-md rounded-md">
      <Image src={free01} alt="img" className="m-auto mt-4 w-[60px]" />
      <h1 className="text-[18px] md:text-[22px] text-[#151875] mt-4">
        Secure Payment
      </h1>
      <p className="text-[#1A0B5B4D] mt-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
    <div className="w-full md:w-[270px] h-auto bg-white text-center p-6 shadow-md rounded-md">
      <Image src={free02} alt="img" className="m-auto mt-4 w-[60px]" />
      <h1 className="text-[18px] md:text-[22px] text-[#151875] mt-4">
        Free Delivery
      </h1>
      <p className="text-[#1A0B5B4D] mt-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
    <div className="w-full md:w-[270px] h-auto bg-white text-center p-6 shadow-md rounded-md">
      <Image src={free03} alt="img" className="m-auto mt-4 w-[60px]" />
      <h1 className="text-[18px] md:text-[22px] text-[#151875] mt-4">
        Fast Delivery
      </h1>
      <p className="text-[#1A0B5B4D] mt-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
  </div>
</div>


     <div className="bg-[#F1F0FF]  mt-10">
        <Image src={specialsofa} alt="sofa" className="m-auto" />
      </div>

      <div className="py-8 px-4 md:px-16">
  <h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    Trending Products
  </h1>
  <div className="flex flex-wrap justify-center mt-10 gap-5">
    {/* Main Product Images */}
    <Image
      src={trending}
      alt="img"
      className="w-full md:w-[200px] lg:w-[250px]"
    />
    <Image
      src={trending01}
      alt="img"
      className="w-full md:w-[200px] lg:w-[250px]"
    />
    <Image
      src={trending02}
      alt="img"
      className="w-full md:w-[200px] lg:w-[250px]"
    />
    <Image
      src={trending03}
      alt="img"
      className="w-full md:w-[200px] lg:w-[250px]"
    />

    {/* Group of Images */}
    <div className="flex flex-col md:flex-row gap-5">
      <Image
        src={group}
        alt="img"
        className="w-full md:w-[150px] lg:w-[350px]"
      />
      <Image
        src={group01}
        alt="img"
        className="w-full md:w-[150px] lg:w-[350px]"
      />
      {/* Vertical List Images */}
      <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0 flex-wrap">
        <Image
          src={list}
          alt="img"
          className="w-[150px] md:w-[120px] lg:w-[220px] lg:mt-6"
        />
        <Image
          src={list01}
          alt="img"
          className="w-[150px] md:w-[120px] lg:w-[220px]"
        />
        <Image
          src={list02}
          alt="img"
          className="w-[150px] md:w-[120px] lg:w-[220px]"
        />
      </div>
    </div>
  </div>
</div>


<div className="py-8 px-4 md:px-16 ">
  {/* Heading */}
  <h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    Discount Items
  </h1>

  {/* Navigation Links */}
  <div className="flex justify-center flex-wrap gap-4 text-[16px] md:text-[18px] font-normal mt-8">
    <a href="#" className="text-[#FB2E86] underline">
      Wood Chair
    </a>
    <a href="#" className="text-[#151875]">
      Plastic Chair
    </a>
    <a href="#" className="text-[#151875]">
      Sofa Collection
    </a>
  </div>

  {/* Discount Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start mt-10 gap-8">
    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-[24px] md:text-[35px] text-[#151875]  lg:relative left-16">
        20% Discount Of All Products
      </h1>
      <span className="text-[#FB2E86] text-[18px] md:text-[21px]  lg:relative left-16">
        Eams Sofa Compact
      </span>
      <p className="text-[#B7BACB] text-[15px] md:text-[17px] mt-6  lg:relative left-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
        habitasse nec, bibendum condimentum.
      </p>
      <pre className="text-[#B7BACB] mt-4 hidden">
        Material expose like metals    Clear lines and geometric figures
      </pre>
      <pre className="text-[#B7BACB] hidden">
        Simple neutral colours.   Material expose like metals
      </pre>
      <button className="mt-8 w-[163px] h-[53px] bg-[#FB2E86] rounded-sm text-white text-center  lg:relative left-16">
        Shop Now
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center lg:relative bottom-20">
      <Image
        src={brownsofa}
        alt="sofa"
        className="max-w-full md:max-w-[400px] lg:max-w-[500px]"
      />
    </div>
  </div>
</div>



          
       <h1 className="text-center text-[42px] text-[#1A0B5B] mt-12">
      Top Categories
      </h1>
      <div className="lg:flex flex-wrap justify-center mt-10 gap-5 ml-3">
        <Image src={top} alt="img" />
        <Image src={top01} alt="img" />
        <Image src={top02} alt="img" />
        <Image src={top03} alt="img" />
      </div>  

      <Image src={externalsofa} alt="sofa" className="mt-16"/>
      <Image src={iconimg} alt="sofa" className="m-auto mt-8"/>


      <h1 className="text-center text-[42px] text-[#1A0B5B] mt-12">
      Latest Blog
      </h1>
      <div className="lg:flex flex-wrap justify-center mt-10 gap-5">
        <Image src={blog} alt="img" />
        <Image src={blog01} alt="img" />
        <Image src={blog02} alt="img" />
      </div>  

    </div>
  );
}
