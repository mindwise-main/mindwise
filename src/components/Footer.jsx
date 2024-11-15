import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-16">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">MindWise</h2>
          <p className="text-gray-400">
            Your partner in mental well-being. Helping you find balance and peace.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            <strong>Email:</strong> support@mindwise.com
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +91 8791106751
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> Plot no. 32, Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates and resources delivered to your inbox.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg text-gray-900"
              
            />
            <button
              type="submit"
              className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MindWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
