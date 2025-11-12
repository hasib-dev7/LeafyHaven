import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B1D14] text-gray-300 py-10 px-6  w-full lg:w-11/12 mx-auto  md:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-green-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Join our green family! Subscribe for plant care tips & updates —
              no spam 🌿
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-gray-900"
            />
            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition duration-300"
              >
                <FaSquareXTwitter />
              </a>

              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition duration-300"
              >
                <FaInstagramSquare />
              </a>

              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition duration-300"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 GreenNest. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
