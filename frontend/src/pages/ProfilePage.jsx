import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123 456 7890",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main Street, Cityville, CA, 90210",
    },
    {
      id: 2,
      type: "Work",
      address: "456 Office Park, Suite 300, TechTown, NY, 10001",
    },
  ]);

  const [orderHistory, setOrderHistory] = useState([
    { orderId: 123456, date: "Dec 10, 2025", status: "Delivered" },
    { orderId: 654321, date: "Nov 15, 2025", status: "Shipped" },
  ]);

  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (newAddress.trim() === "") return;
    const newAddressObj = {
      id: addresses.length + 1,
      type: "New Address",
      address: newAddress,
    };
    setAddresses([...addresses, newAddressObj]);
    setNewAddress("");
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

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
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>

      {/* Saved Addresses Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
        <h2 className="text-xl font-medium mb-3 text-gray-700">
          Saved Addresses
        </h2>
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="mb-4 p-4 border rounded-lg flex justify-between items-start"
          >
            <div>
              <p>
                <strong>Type:</strong> {addr.type}
              </p>
              <p>
                <strong>Address:</strong> {addr.address}
              </p>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteAddress(addr.id)}
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
            <li key={order.orderId} className="mb-4">
              <p>
                <strong>Order #:</strong> {order.orderId}
              </p>
              <p>
                <strong>Date:</strong> {order.date}
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
