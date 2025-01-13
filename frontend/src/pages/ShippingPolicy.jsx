import React, { useEffect } from "react";

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="flex justify-center text-2xl text-black font font-bold">
        Shipping Policy
      </h1>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0 font-medium">
        It's important to start by clarifying to customers that your order
        processing times are separate from the shipping times they see at
        checkout.{" "}
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0">
        All orders are processed within minimum 4 to 5 days and maximum 8 to 10
        business days (excluding weekends and holidays) after receiving your
        order confirmation email. You will receive another notification when
        your order has shipped.{" "}
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0 font-medium">
        Include any other pertinent information towards the beginning, such as
        potential delays due to a high volume of orders or postal service
        problems that are outside of your control.
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0">
        Domestic Shipping Rates and Estimates
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0">
        For calculated shipping rates: Shipping charges for your order will be
        calculated and displayed at checkout.{" "}
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0">
        Deliveries are made from [delivery hours] on [available days]. We will
        contact you via text message with the phone number you provided at
        checkout to notify you on the day of our arrival.{" "}
      </p>
      <p className="text-justify flex text-s md:w-1/2 md:px-2  py-4 mx-auto w-full px-0 font-medium">
        You can list out the ZIP/postal codes you service and/or consider
        embedding a map here so customers can easily see if they are within your
        local delivery range.
      </p>
    </div>
  );
};

export default ShippingPolicy;
