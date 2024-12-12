import Image from "next/image";
import notfound from '../../public/assets/notfound.png';
import iconimg from '../../public/assets/icons-img.png';
export default function Notfound() {
    return(
        <div>
                      
<div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">404 Not Found</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">404 Not Found</span>
  </p>
</div>
            <Image src={notfound} alt="img" className="m-auto relative bottom-16"/>
            <Image src={iconimg} alt="sofa" className="m-auto mt-8"/>

        </div>
    )
}