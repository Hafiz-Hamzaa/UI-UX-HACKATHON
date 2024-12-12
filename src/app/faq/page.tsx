import Image from "next/image";
import iconimg from '../../../public/assets/icons-img.png';
export default function Faq() {
  return (
    <div>

<div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Faq</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Faq</span>
  </p>
</div>


      <div className="min-h-screen py-12 px-6 sm:px-10 bg-gray-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
    {/* Left Section */}
    <div>
      <h2 className="text-[36px] font-bold text-[#151875] mb-8">General Information</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-[#151875] font-semibold text-[20px] mb-2">
            Eu dictumst cum at sed euismod condimentum?
          </h3>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquent sed 
            tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div>
          <h3 className="text-[#151875] font-semibold text-[20px] mb-2">
            Magna bibendum est fermentum eros.
          </h3>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquent sed 
            tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div>
          <h3 className="text-[#151875] font-semibold text-[20px] mb-2">
            Odio muskana hak eris consequat scelerisque?
          </h3>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquent sed 
            tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div>
          <h3 className="text-[#151875] font-semibold text-[20px] mb-2">
            Elit id blandit sabara boi velit qua mara?
          </h3>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquent sed 
            tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="bg-[#F8F8FD] rounded-lg shadow-lg p-8">
      <h3 className="text-[#151875] text-[28px] font-bold mb-6">Ask a Question</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Subject*"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          placeholder="Type Your Message*"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-[120px] bg-[#FB2E86] text-white font-bold py-3 rounded-lg hover:bg-pink-600"
        >
          Send Mail
        </button>
      </form>
    </div>
  </div>
</div>
<Image src={iconimg} alt="sofa" className="m-auto mt-20"/>






    </div>
  );
}
