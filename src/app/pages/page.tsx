import Image from 'next/image'
import paged from '../../../public/assets/pagesorby.png';
import accessories from '../../../public/assets/Ecommerce accesories.png';
import accessories01 from '../../../public/assets/Ecommerce accesories (1).png';
import accessories02 from '../../../public/assets/Ecommerce accesories (2).png';
import accessories03 from '../../../public/assets/Ecommerce accesories (3).png';
import accessories04 from '../../../public/assets/Ecommerce accesories (4).png';
import accessories05 from '../../../public/assets/Ecommerce accesories (5).png';
import accessories06 from '../../../public/assets/Ecommerce accesories (6).png';
import accessories07 from '../../../public/assets/Ecommerce accesories (7).png';
import accessories08 from '../../../public/assets/Ecommerce accesories (8).png';
import accessories09 from '../../../public/assets/Ecommerce accesories (9).png';
import accessories10 from '../../../public/assets/Ecommerce accesories (10).png';
import iconimg from '../../../public/assets/icons-img.png';
export default function Pages() {
    return(
        <div>
                 <div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Pages</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Pages</span>
  </p>
</div>
            <Image src={paged} alt='img' className='m-auto mt-20 max-sm:hidden'/>

            <div className='flex justify-center flex-wrap mt-28 gap-7'>
                <Image src={accessories} alt="img"/>
                <Image src={accessories01} alt="img"/>
                <Image src={accessories02} alt="img"/>
                <Image src={accessories03} alt="img"/>
                <Image src={accessories04} alt="img"/>
                <Image src={accessories05} alt="img"/>
                <Image src={accessories06} alt="img"/>
                <Image src={accessories07} alt="img"/>
                <Image src={accessories08} alt="img"/>
                <Image src={accessories09} alt="img"/>
                <Image src={accessories10} alt="img"/>
                <Image src={accessories} alt="img"/>
            </div>

            <Image src={iconimg} alt="sofa" className="m-auto mt-8"/>

        </div>
    )
}
