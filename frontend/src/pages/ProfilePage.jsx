import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  const token = localStorage.getItem("token");
  const backendUrl = "http://localhost:4000"; // Replace with your backend URL

  useEffect(() => {
    if (!token) {
      toast.error("Please log in to access your profile.");
      navigate("/login");
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setUser(response.data.user);
          setAddresses(response.data.user.addresses);
          setOrderHistory(response.data.user.orderHistory);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Failed to load profile data.");
      }
    };

    fetchProfileData();
  }, [token, navigate, backendUrl]);

  const handleAddAddress = async () => {
    if (!newAddress.trim()) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/user/address`,
        { address: newAddress },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setAddresses([...addresses, response.data.address]);
        setNewAddress("");
        toast.success("Address added successfully.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding address:", error);
      toast.error("Failed to add address.");
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/user/address/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setAddresses(addresses.filter((addr) => addr._id !== id));
        toast.success("Address deleted successfully.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Failed to delete address.");
    }
  };

  if (!user) return null; // Show nothing while loading user data

  return (
    <div className="p-5 sm:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-5 text-gray-800">My Profile</h1>

      {/* User Information Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
        <h2 className="text-xl font-medium mb-3 text-gray-700">
          Personal Information
        </h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* Saved Addresses Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
        <h2 className="text-xl font-medium mb-3 text-gray-700">
          Saved Addresses
        </h2>
        {addresses.map((addr) => (
          <div
            key={addr._id}
            className="mb-4 p-4 border rounded-lg flex justify-between items-start"
          >
            <div>
              <p>{addr.address}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteAddress(addr._id)}
            >
              Delete
            </button>
          </div>
        ))}

        <div className="mt-5">
          <input
            type="text"
            placeholder="Enter new address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border p-2 rounded w-full mb-3"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddAddress}
          >
            Add New Address
          </button>
        </div>
      </div>

      {/* Order History Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg">
        <h2 className="text-xl font-medium mb-3 text-gray-700">
          Order History
        </h2>
        <ul>
          {orderHistory.map((order) => (
            <li key={order._id} className="mb-4">
              <p>
                <strong>Order #:</strong> {order._id}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
