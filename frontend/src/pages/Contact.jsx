import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Manufacturing</p>
          <p className=" text-gray-500">
            Kalwa 400605 <br />
            Thane, IND
          </p>
          <p className=" text-gray-500">
            <a
              href="https://wa.me/9321384125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              +91-9321384125
            </a>

            <a
              href="mailto:Contact@thedzire.com"
              className="flex flex-col text-black hover:text-blue-500"
            >
              Contact@thedzire.com
            </a>
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
