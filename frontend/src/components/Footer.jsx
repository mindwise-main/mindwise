// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 pt-10 pb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-16">
        {/* About Section */}
        <div>
          <h3 className="text-sm font-bold mb-4 ">MindWise</h3>
          <p className="text-grey">
            Your partner in mental well-being. Helping you find balance and peace.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-grey hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-grey hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-grey hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="text-grey hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact</h4>
          <p className="text-grey">
            <strong>Email:</strong> support@mindwise.com
          </p>
          <p className="text-grey">
            <strong>Phone:</strong> +91 8791106751
          </p>
          <p className="text-grey">
            <strong>Address:</strong> Plot no. 32, Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Subscribe</h4>
          <p className="text-grey mb-4">
            Get the latest updates and resources delivered to your inbox.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg text-black border border-grey focus:outline-purple/50"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-teal-600 hover:bg-opacity-90 text-white py-2 px-4 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-grey mt-10 pt-6 text-center text-grey text-sm">
        © {new Date().getFullYear()} MindWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
