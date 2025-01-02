import React, { useEffect } from "react";

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="flex justify-center text-2xl text-black font font-extrabold">
        Shipping Policy
      </h1>
    </div>
  );
};

export default ShippingPolicy;
