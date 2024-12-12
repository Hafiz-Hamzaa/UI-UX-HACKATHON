import Image from "next/image"
import about from '../../../public/assets/about-img.png'
import free from '../../../public/assets/free-delivery.png'
import free01 from '../../../public/assets/free delivery 1.png'
import free02 from '../../../public/assets/free delivery 2.png'
import free03 from '../../../public/assets/free delivery 3.png'
import client from '../../../public/assets/client.png'
export default function About() {
    return(
        <div>
            <div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">About Us</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">About Us</span>
  </p>
</div>


<div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
  {/* Image Section */}
  <div className="w-full md:w-auto">
    <Image 
      src={about} 
      alt="img" 
      className="mt-4 md:mt-28 mx-auto md:ml-36" 
    />
  </div>

  {/* Text Section */}
  <div className="mt-8 md:mt-40 md:ml-16 text-center md:text-left lg:ml-8">
    <h1 className="text-[24px] md:text-[36px] text-[#151875] font-semibold leading-[1.4]">
      Know About Our Ecommerce <br className="hidden md:block" /> Business, History
    </h1>
    <p className="text-[#8A8FB9] mt-4 text-[14px] md:text-[16px] leading-[1.6]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
      mattis aliquam, malesuada diam est. <br /> Malesuada sem tristique amet erat vitae 
      eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
    </p>
    <button className="mt-8 md:mt-12 w-[140px] md:w-[163px] h-[45px] md:h-[53px] bg-[#FB2E86] rounded-sm text-white text-center">
      Shop Now
    </button>
  </div>
</div>


<h1 className="text-center text-[28px] md:text-[42px] text-[#1A0B5B] mt-12">
    Our Features
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
      Quality Product
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


       <div className="bg-[#FBFBFF] h-[503px]">
      <h1 className="text-center text-[42px] text-[#1A0B5B] pt-14 font-semibold">
      Our Client Say!
      </h1>
      <Image src={client} alt="img" className="m-auto mt-6"/>
      <h2 className="mt-4 text-[22px] text-[#1A0B5B] text-center">Selina Gomez</h2>
      <p className="text-[10px] text-[#8A8FB9] text-center">Ceo At Webecy Digital</p>
      <p className="text-[#8A8FB9] text-center mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br /> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br /> aliquam lacus volutpat praesent.</p>

        
      <div className="flex justify-center gap-4 rounded-sm mt-6">
        <div className="divider w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
        <div className="divider w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
        <div className="divider w-10 bg-[#FB2E86] h-1 rounded-sm"></div>
      </div>
      </div> 



        </div>
    )
}