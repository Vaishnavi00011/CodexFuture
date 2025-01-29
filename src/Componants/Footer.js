import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">CodexFuture Technologies Pvt. Ltd. </h2>
          <p className="text-sm">
            Providing innovative IT solutions to businesses worldwide. Your
            success is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/about-us"}>
              <a href="about" className="hover:text-white">
                About Us
              </a>
              </Link>
            </li>
            <li>
              <Link to={"/sarvice"}>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              </Link>
            </li>
            <li>
              <Link to={'/contact'}>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a></Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com" // Replace with your Facebook page URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a
              href="https://instagram.com" // Replace with your Instagram page URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn page URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://wa.me/yourphonenumber" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm lg:px-0 px-1">
          © 2024 CodexFuture Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
