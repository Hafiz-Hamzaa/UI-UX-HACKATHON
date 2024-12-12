import Image from "next/image";
import paged from '../../../public/assets/pagesorby.png';
import rectangle from '../../../public/assets/Rectangle 32.png';
import rectangle01 from '../../../public/assets/Rectangle 32 (1).png';
import rectangle02 from '../../../public/assets/Rectangle 32 (2).png';
import rectangle03 from '../../../public/assets/Rectangle 32 (3).png';
import rectangle04 from '../../../public/assets/Rectangle 32 (4).png';
import rectangle05 from '../../../public/assets/Rectangle 32 (5).png';
import rectangle06 from '../../../public/assets/Rectangle 32 (6).png';
import stars from '../../../public/assets/ant-design_star-filled.png';
import heart from '../../../public/assets/heart.png';
import iconimg from '../../../public/assets/icons-img.png';
export default function Shop() {
    return(
        <div>
            <div className="bg-[#F6F5FF] h-auto md:h-[286px] px-4 md:pl-40 mt-8 pt-12 md:pt-24 text-center md:text-left">
  {/* Title */}
  <h1 className="text-[24px] md:text-[36px] text-[#101750]">Shops List</h1>
  
  {/* Breadcrumb Navigation */}
  <p className="text-[14px] md:text-[16px] mt-2 relative bottom-2">
    Home . Pages . <span className="text-[#FB2E86]">Shops List</span>
  </p>
</div>
            <Image src={paged} alt='img' className='m-auto mt-20 max-sm:hidden'/>


            <div className="ml-40 mt-20">
            <div className="flex max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle} alt="img"/>
                </div>
                <div className="mt-8 ml-12  max-sm:relative right-6">
                    <div className="flex gap-2">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Accumsan tincidunt</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div>

            <div className="flex  max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle01} alt="img"/>
                </div>
                <div className="mt-8 ml-12 max-sm:relative right-6">
                <div className="flex gap-2 ">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">In nulla</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div>

            <div className="flex max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle02} alt="img"/>
                </div>
                <div className="mt-8 ml-12  max-sm:relative right-6">
                <div className="flex gap-2 ">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Vel sem</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div>

            <div className="flex max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle03} alt="img"/>
                </div>
                <div className="mt-8 ml-12  max-sm:relative right-6">
                <div className="flex gap-2 ">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Porttitor cum</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div>

            <div className="flex max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle04} alt="img"/>
                </div>
                <div className="mt-8 ml-12  max-sm:relative right-6">
                <div className="flex gap-2 ">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Nunc in</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div>

            <div className="flex  max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle05} alt="img"/>
                </div>
                <div className="mt-8 ml-12 max-sm:relative right-6">
                <div className="flex gap-2 ">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Curabitur lectus</h1>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#DE9034] mt-2 ml-4"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#E60584] m-2"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#5E37FF] mt-2"></div>
                    </div>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div> 

             <div className="flex  max-sm:flex-col max-sm:relative right-20">
                <div>
                    <Image src={rectangle06} alt="img"/>
                </div>
                <div className="mt-8 ml-12  max-sm:relative right-6">
                    <h1 className="text-[19px] text-[#111C85] font-semibold">Vitae facilisis</h1>
                    <div className="flex gap-2 ">
                    <p className="text-[#111C85] font-semibold">$26.00 <span className="text-[#FF2AAA] line-through font-semibold">$52.00</span></p>
                    <Image src={stars} alt="logo" className="ml-4"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    <Image src={stars} alt="logo"/>
                    </div>
                    <p className="text-[#9295AA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est <br /> adipiscing in phasellus non in justo.</p>
                    <Image src={heart} alt="icons"/>
                </div>
            </div> 
            
            </div>

            <Image src={iconimg} alt="sofa" className="m-auto mt-8"/>



        </div>
    )
}