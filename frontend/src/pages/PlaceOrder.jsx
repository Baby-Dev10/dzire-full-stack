import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const countryStateCityData = {
  UnitedStates: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Austin", "Dallas"],
    Florida: ["Miami", "Orlando", "Tampa"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    Delhi: ["New Delhi", "Old Delhi"],
  },
  Canada: {
    Ontario: ["Toronto", "Ottawa", "Hamilton"],
    Quebec: ["Montreal", "Quebec City"],
    Alberta: ["Calgary", "Edmonton"],
  },
};

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Street: "",
    City: "",
    State: "",
    Country: "",
    Phone: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "Country") {
      const selectedStates = Object.keys(countryStateCityData[value] || {});
      setStates(selectedStates);
      setCities([]);
      setFormData((data) => ({ ...data, State: "", City: "", [name]: value }));
    } else if (name === "State") {
      const selectedCities =
        countryStateCityData[formData.Country]?.[value] || [];
      setCities(selectedCities);
      setFormData((data) => ({ ...data, City: "", [name]: value }));
    } else {
      setFormData((data) => ({ ...data, [name]: value }));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.warning("Please login first to place your order!", {
        position: "top-center",
        onClose: () => navigate("/login"),
        autoClose: 3000,
      });
      return;
    }

    try {
      const orderData = {
        address: formData,
        items: Object.entries(cartItems).map(([id, sizes]) => ({
          ...products.find((product) => product._id === id),
          sizes,
        })),
        amount: getCartAmount() + delivery_fee,
      };

      if (method === "cod") {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } }
        );
        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
      } else if (method === "razorpay") {
        const response = await axios.post(
          backendUrl + "/api/order/razorpay",
          orderData,
          { headers: { token } }
        );
        if (response.data.success) {
          initPay(response.data.order);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="FirstName"
            value={formData.FirstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="LastName"
            value={formData.LastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="Email"
          value={formData.Email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="Street"
          value={formData.Street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <select
            required
            onChange={onChangeHandler}
            name="Country"
            value={formData.Country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          >
            <option value="" disabled>
              Select Country
            </option>
            {Object.keys(countryStateCityData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            required
            onChange={onChangeHandler}
            name="State"
            value={formData.State}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            disabled={!states.length}
          >
            <option value="" disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <select
          required
          onChange={onChangeHandler}
          name="City"
          value={formData.City}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          disabled={!cities.length}
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input
          required
          onChange={onChangeHandler}
          name="Phone"
          value={formData.Phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <CartTotal />
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">PREPAID</p>
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
