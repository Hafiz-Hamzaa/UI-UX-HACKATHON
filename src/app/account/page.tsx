import Image from "next/image";
import iconimg from '../../../public/assets/icons-img.png';
export default function Account() {
  return (
    <div>
         
<div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">My Account</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">My Account</span>
  </p>
</div>
      <div className="flex items-center justify-center min-h-screen">
      <div className="w-[544px] h-[474px] bg-white shadow-lg rounded-lg p-8 flex flex-col items-center relative bottom-12">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
        <p className="text-[#9096B2] mt-2">Please login using account detail bellow.</p>
        
        {/* Input Fields */}
        <div className="w-full mt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 border border-gray-300 rounded-md px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Forgot Password */}
        <p className="text-[#9096B2] text-sm mt-2 cursor-pointer hover:underline">
          Forgot Password
        </p>
        
        {/* Sign In Button */}
        <button className="w-full h-12 bg-[#FB2E86] text-white font-semibold rounded-md mt-4 hover:bg-blue-600">
          Sign In
        </button>
        
        {/* Create Account */}
        <p className="text-gray-600 mt-6 text-center text-sm">
          Do not have any account?{' '}
          <span className="text-blue-500 cursor-pointer hover:underline">Create Account</span>
        </p>
      </div>
    </div>
    <Image src={iconimg} alt="sofa" className="m-auto mt-10 relative bottom-24"/>
    </div>
  );
}
