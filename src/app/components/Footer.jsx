import Link from "next/link";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0d0e12] border-t border-[#1e2029]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[#9dff3f] text-[#0d0e12] font-bold text-sm w-9 h-9 rounded-lg flex items-center justify-center">
                SN
              </div>
              <span className="text-white font-semibold text-lg">
                SportNest
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Book your favorite sports facilities with ease. The ultimate
              platform for athletes and enthusiasts.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#2e3038] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition"
              >
                <FaXTwitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#2e3038] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition"
              >
                <FaFacebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#2e3038] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  All Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MdLocationOn
                  size={18}
                  className="text-[#9dff3f] flex-shrink-0"
                />
                123 Sport Ave, Dhaka
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MdPhone size={18} className="text-[#9dff3f] flex-shrink-0" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MdEmail size={18} className="text-[#9dff3f] flex-shrink-0" />
                support@sportnest.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2029] mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 SportNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
