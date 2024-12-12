import Image from "next/image";
import blog from '../../../public/assets/blog.png'
import blog01 from '../../../public/assets/blog01.png'
import blog02 from '../../../public/assets/blog02.png'
import product from '../../../public/assets/product.png'
import category from '../../../public/assets/categories.png'
import post from '../../../public/assets/post.png'
import offerproduct from '../../../public/assets/offerproduct.png'
import follow from '../../../public/assets/followicons.png'
import tags from '../../../public/assets/tags.png'
import number from '../../../public/assets/numbers.png'
import iconimg from '../../../public/assets/icons-img.png'
export default function Blog() {
  return (
    <div>

    
<div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Blogs Page</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Blogs</span>
  </p>
</div>

      {/* Blogs page */}
      <div className="flex relative right-24 max-sm:flex-col">
        <div className="ml-40 mt-24">
          <Image src={blog} alt="img"/>
          <button className="w-[163px] h-[23px] bg-[#FFE7F9] text-[#151875] rounded-sm mt-6 text-[14px]">Surf Auxion</button>
          <button className="w-[163px] h-[23px] bg-[#FFECE2] text-[#151875] rounded-sm ml-8 mt-6 text-[14px]">Aug 09 2020</button>
          <h1 className="mt-10 text-[#151875] text-[30px] font-semibold">Mauris at orci non vulputate diam tincidunt nec.</h1>
          <p className="mt-8 text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
          <p className="mt-6 text-[18px] text-[#151875] font-semibold">Read More </p>
        </div>
        <div className="ml-2 mt-24  relative left-36">
          <h1 className="text-[20px] text-[#151875] font-semibold ">Search</h1>
          <input type="text" placeholder="Search here" className="border-2 border-gray-100 pl-2 mt-2" />
          <Image src={category} alt="img" className="mt-10"/>
          <h1 className="text-[20px] text-[#151875] font-semibold mt-16">Recent Post</h1>
          <Image src={post} alt="img" className="mt-10"/>
        </div>
      </div>



      <div className="flex max-sm:flex-col relative right-32  ">
        <div className="ml-40 mt-24">
          <Image src={blog01} alt="img"/>
          <button className="w-[163px] h-[23px] bg-[#FFE7F9] text-[#151875] rounded-sm mt-6 text-[14px]">Surf Auxion</button>
          <button className="w-[163px] h-[23px] bg-[#FFECE2] text-[#151875] rounded-sm ml-8 mt-6 text-[14px]">Aug 09 2020</button>
          <h1 className="mt-10 text-[#151875] text-[30px] font-semibold">Mauris at orci non vulputate diam tincidunt nec.</h1>
          <p className="mt-8 text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
          <p className="mt-6 text-[18px] text-[#151875] font-semibold">Read More </p>
        </div>
        <div className="ml-40 mt-24 lg:relative right-28 relative left-2">
        <h1 className="text-[20px] text-[#151875] font-semibold ">Sale Prouct</h1>
          <Image src={product} alt="img" className="mt-10"/>
          <h1 className="text-[20px] text-[#151875] font-semibold mt-16">Offer Product</h1>
          <Image src={offerproduct} alt="img" className="mt-10"/>
          <h1 className="text-[20px] text-[#151875] font-semibold mt-6 ">Follow</h1>
          <Image src={follow} alt="img" className="relative right-12 bottom-6"/>
        </div>
      </div>
      
      <div className="flex max-sm:flex-col relative right-28  ">
      <div className="ml-40 mt-24 relative bottom-36">
          <Image src={blog02} alt="img"/>
          <button className="w-[163px] h-[23px] bg-[#FFE7F9] text-[#151875] rounded-sm mt-6 text-[14px]">Surf Auxion</button>
          <button className="w-[163px] h-[23px] bg-[#FFECE2] text-[#151875] rounded-sm ml-8 mt-6 text-[14px]">Aug 09 2020</button>
          <h1 className="mt-10 text-[#151875] text-[30px] font-semibold">Mauris at orci non vulputate diam tincidunt nec.</h1>
          <p className="mt-8 text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
          <p className="mt-6 text-[18px] text-[#151875] font-semibold">Read More </p>
        </div>
        <div className="ml-11">
        <h1 className="text-[20px] text-[#151875] font-semibold mt-6 ">Tags</h1>
          <Image src={tags} alt="img"/>
        </div>
        </div>  

        <Image src={number} alt="no" className="m-auto mt-9"/>
        <Image src={iconimg} alt="sofa" className="m-auto mt-20"/>






    </div>
  );
}
