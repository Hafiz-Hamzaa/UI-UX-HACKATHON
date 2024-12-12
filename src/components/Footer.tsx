import Image from "next/image";
import footer from '../../public/assets/Group 245.png'
import Link from "next/link";
export default function Footer() {
  return (
    <div>
    <footer className="bg-[#EEEFFB]  py-10 px-5">
      <div className="max-w-6xl mx-auto flex-wrap">
        <div className="flex justify-between flex-wrap gap-10">
          {/* First Column */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[28px]">Hekto</h2>
            <ul className="space-y-2">
              <li>
                <div>
                    <input type="text" placeholder="Enter Email Address" className="h-[30px] pl-10" />
                    <button className="text-white bg-[#FB2E86] w-[130px] h-[30px]">Sign up</button>
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  Contact Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  17 Princess Road,London,Greater London NW1 BJR,UK
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[28px]">Catagories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Laptops & Computers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Cameras & Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Smart Phones & Tablets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Video Games & Consoles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Waterproof Headphones
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[28px]">Customer Care</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="hover:text-gray-400 text-[#8A8FB9]">
                My Account
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                 Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Orders History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Order Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[28px]">Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                Browse the Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  Pre-Built Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  Visual Composer Elements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 text-[#8A8FB9]">
                  WooCommerec Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <Image src={footer} alt="footer"/>
    </div>
  );
}
