import Image from "next/image";
import square from '../../../public/assets/Rectangle 138.png';
import square01 from '../../../public/assets/Rectangle 134.png';
import square02 from '../../../public/assets/Rectangle 136.png';
import square03 from '../../../public/assets/Rectangle 137.png';
import heart from '../../../public/assets/heart.png';
import people from '../../../public/assets/people.png';
import people01 from '../../../public/assets/people-1.png';
import people02 from '../../../public/assets/people-2.png';
import people03 from '../../../public/assets/people-3.png';
import iconimg from '../../../public/assets/icons-img.png';

export default function Products() {
    return(
        <div>

<div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Products</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Product</span>
  </p>
</div>

<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full sm:w-[1170px] sm:h-[509px] flex flex-col sm:flex-row border border-gray-300 shadow-lg">
    {/* Left Images Section */}
    <div className="flex flex-col justify-between w-full sm:w-1/3 p-2 ">
      <Image src={square01} alt="img" className="h-[33.33%] object-cover mb-2" />
      <Image src={square02} alt="img" className="h-[33.33%] object-cover mb-2" />
      <Image src={square03} alt="img" className="h-[33.33%] object-cover" />
    </div>

    {/* Right Section */}
    <div className="flex flex-col sm:flex-row w-full sm:w-2/3">
      {/* Large Image */}
      <div className="w-full sm:w-1/2 p-2 flex items-center justify-center">
        <Image src={square} alt="img" className="h-[100%] object-cover lg:relative right-56" />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-6 lg:relative right-56">
        <h1 className="text-[24px] sm:text-[34px] font-semibold text-[#0D134E]">Playwood arm chair</h1>
        <pre className="font-semibold text-[#151875] mt-2 text-[16px] sm:text-[18px]">$99.99 <span className="font-semibold text-[#FB2E86] line-through">$32.00</span></pre>
        <p className="text-gray-500 mt-4 text-[14px] sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br /> porttitor purus, et volutpat sit.
        </p>
        <div className="flex items-center mt-4">
          <p className="text-[#151875] font-semibold mr-2">Add to Cart</p>
          <Image src={heart} alt="icons" />
        </div>
        <div className="flex mt-4">
          <p className="text-[#151875] font-semibold mr-4">Categories <br />Tags <br />Share</p>
          <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</div>











<div className="bg-[#F9F8FE] h-auto lg:h-[649px]">
  <div className="px-6 lg:pl-40 pt-12">
    <div className="flex flex-col lg:flex-row gap-6 font-semibold text-[#151875] text-center lg:text-left">
      <div className="underline">Description</div>
      <div>Additional Info</div>
      <div>Reviews</div>
      <div>Video</div>
    </div>

    <h2 className="text-[20px] lg:text-[22px] text-[#151875] pt-8 lg:pt-16">
      Varius tempor.
    </h2>
    <p className="pt-4 lg:pt-8 text-[#A9ACC6] text-sm lg:text-base leading-relaxed">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. 
      Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus 
      cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>

    <h2 className="text-[20px] lg:text-[22px] text-[#151875] pt-8 lg:pt-16">
      Varius tempor.
    </h2>
    <p className="text-[#A9ACC6] pt-4 text-sm lg:text-base">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>
    <p className="text-[#A9ACC6] pt-4 text-sm lg:text-base">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>
  </div>
</div>

<h1 className="text-[24px] lg:text-[34px] font-semibold text-[#0D134E] text-center mt-8 lg:mt-10">
  Related Products
</h1>
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8 lg:flex-wrap">
  <div className="flex flex-col items-center">
    <Image src={people} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Mens Fashion Wear <br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people01} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Womens Fashion<br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people02} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Wolx Dummy Fashion<br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people03} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Top Wall Digital Clock<br />$43.00</p>
  </div>
</div>






{/* 
<div className="bg-[#F9F8FE] h-auto lg:h-[649px]">
  <div className="px-6 lg:pl-40 pt-12">
    <div className="flex flex-col lg:flex-row gap-6 font-semibold text-[#151875] text-center lg:text-left">
      <div className="underline">Description</div>
      <div>Additional Info</div>
      <div>Reviews</div>
      <div>Video</div>
    </div>

    <h2 className="text-[20px] lg:text-[22px] text-[#151875] pt-8 lg:pt-16">
      Varius tempor.
    </h2>
    <p className="pt-4 lg:pt-8 text-[#A9ACC6] text-sm lg:text-base leading-relaxed">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. 
      Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus 
      cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>

    <h2 className="text-[20px] lg:text-[22px] text-[#151875] pt-8 lg:pt-16">
      Varius tempor.
    </h2>
    <p className="text-[#A9ACC6] pt-4 text-sm lg:text-base">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>
    <p className="text-[#A9ACC6] pt-4 text-sm lg:text-base">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
    </p>
  </div>
</div>

<h1 className="text-[24px] lg:text-[34px] font-semibold text-[#0D134E] text-center mt-8 lg:mt-10">
  Related Products
</h1>
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8 lg:flex-wrap">
  <div className="flex flex-col items-center">
    <Image src={people} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Mens Fashion Wear <br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people01} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Womens Fashion<br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people02} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Wolx Dummy Fashion<br />$43.00</p>
  </div>
  <div className="flex flex-col items-center">
    <Image src={people03} alt="img" />
    <p className="mt-2 text-[#151875] font-semibold text-center">Top Wall Digital Clock<br />$43.00</p>
  </div>
</div> */}











<Image src={iconimg} alt="sofa" className="m-auto mt-20"/>


</div>

    )
}