import Image from "next/image";
import contacticons from '../../../public/assets/cotact-icons.png';
import contactimg from  '../../../public/assets/contact-img.png';
import Link from "next/link";
export default function Contact() {
  return (
    <div>
                  <div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Contact Us</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Contact Us</span>
  </p>
</div>
      

      <div className="min-h-screen py-10 px-4 sm:px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Left Section */}
    <div>
      {/* Information About Us */}
      <h2 className="text-[36px] font-bold text-[#151875] mb-4 mt-12">Information About us</h2>
      <p className="text-[#8A8FB9] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> 
        mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br />
        eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-3 mb-10">
        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>
    </div>

    {/* Right Section */}
    <div>
      <h3 className="font-bold text-[#151875] text-[36px] mb-4 mt-12">Contact Way</h3>
      <Image src={contacticons} alt="img" />
    </div>
  </div>

  {/* Second Row for "Get In Touch" and Image */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-20">
    {/* Get In Touch Section */}
    <div>
      <h2 className="text-[35px] font-bold text-[#151875] mb-4">Get In Touch</h2>
      <p className="text-[#8A8FB9] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> 
        tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
      </p>
      {/* Contact Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your E-mail"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <input
          type="text"
          placeholder="Subject*"
          className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          placeholder="Type Your Message*"
          className="border border-gray-300 rounded-lg w-full px-4 py-2 mt-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="bg-[#FB2E86] text-white rounded-lg px-6 py-2 mt-4 hover:bg-pink-600"
        >
          Send Mail
        </button> <br />
        <Link href="/faq">
        <button
          className="bg-[#FB2E86] text-white rounded-lg px-6 py-2 mt-4 hover:bg-pink-600"
        >
          FAQ
        </button>
        </Link>
      </form>
    </div>

    {/* Image Section */}
    <div>
      <Image
        src={contactimg}
        alt="Get in Touch Image"
        className="w-full max-w-md mx-auto"
      />
    </div>
  </div>
</div>


    </div>
  );
}
