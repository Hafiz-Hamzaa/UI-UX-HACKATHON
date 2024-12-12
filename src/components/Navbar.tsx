import Link from "next/link"
import Image from "next/image"
import phone from '../../public/assets/bx_bx-phone-call.png'
import envelope from '../../public/assets/uil_envelope-alt.png'
import input from '../../public/assets/inputsearch.png'
export default function Navbar() {
    return(
      <div>

<div className="h-[44px] bg-[#7E33E0] pl-4 md:pl-40 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm md:text-base py-2">
    <div className="flex flex-wrap gap-2 items-center">
        <Image src={envelope} alt="email logo" />
        <a href="#" className="text-white">mhhasanul@gmail.com</a>
        <Image src={phone} alt="phone logo" className="ml-4" />
        <a href="#" className="text-white">+922194943892</a>
    </div>

    <div className="text-white flex flex-wrap gap-2 sm:gap-4 md:gap-6 mt-2 md:mt-0 pr-4 md:pr-40 max-sm:relative bottom-1">
        <a href="#">English</a>
        <a href="#">USD</a>
        <a href="#">Login</a>
        <a href="#">Wishlist</a>
    </div>
</div>

<nav className="flex flex-col md:flex-row justify-between items-center pl-4 md:pl-40 mt-4">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <h1 className="text-[28px] md:text-[34px] text-[#0D0E43] whitespace-nowrap">Hekto</h1>
        <div className="flex flex-wrap md:flex-nowrap gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base">
            <Link href="/" className="text-[#FB2E86]">Home</Link>
            <Link href="/about" className="text-[#0D0E43]">About Us</Link>
            <Link href="/pages" className="text-[#0D0E43]">Pages</Link>
            <a href="/products" className="text-[#0D0E43]">Products</a>
            <a href="/blog" className="text-[#0D0E43]">Blogs</a>
            <a href="/shop" className="text-[#0D0E43]">Shop</a>
            <a href="/contact" className="text-[#0D0E43]">Contact</a>
        </div>
    </div>

    <Image src={input} alt="search" className="hidden md:block pr-4 md:pr-40 mt-4 md:mt-0" />
</nav>







      </div>
    )
  }