import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img className="mb-5 w-32" src={assets.logo} alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-black">
            "Two friends, united by a passion for premium quality and ultimate
            comfort, founded our premium clothing brand with one mission: to
            create the perfect blend of style and comfort. Our products are
            crafted with care, using only the finest materials to ensure every
            wear feels as good as it looks. Experience the perfect fit and
            lasting quality with every piece."
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-black">
            <Link to="/" className="text-black">
              <li>Home</li>
            </Link>
            <Link to="/about" className="text-black">
              <li>About us</li>
            </Link>
            <Link to="/refundpolicy" className="text-black">
              <li>Refund Policy</li>
            </Link>
            <Link to="/privacyandpolicy" className="text-black">
              <li>Privacy policy</li>
            </Link>
            <Link to="/termsandconditions" className="text-black">
              <li>Terms & Conditions</li>
            </Link>
            <Link to="/shippingpolicy" className="text-black">
              <li>Shipping Policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-black">
            <li>
              <a
                href="https://wa.me/9321384125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500"
              >
                +91-9321384125
              </a>
            </li>
            <li>
              <a
                href="mailto:Contact@thedzire.com"
                className="text-black hover:text-blue-500"
              >
                contact@thedzire.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 contact@thedzire.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
