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

  const handleAddAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      type: "New Address",
      address: "789 New Road, ExampleCity, EX, 12345",
    };
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className="p-5 sm:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">My Profile</h1>

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
          <div key={addr.id} className="mb-4 p-4 border rounded-lg">
            <p>
              <strong>Type:</strong> {addr.type}
            </p>
            <p>
              <strong>Address:</strong> {addr.address}
            </p>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          onClick={handleAddAddress}
        >
          Add New Address
        </button>
      </div>

      {/* Order History Section */}
      <div className="bg-white p-5 shadow-lg rounded-lg">
        <h2 className="text-xl font-medium mb-3 text-gray-700">
          Order History
        </h2>
        <ul>
          <li className="mb-2">
            <p>
              <strong>Order #:</strong> 123456
            </p>
            <p>
              <strong>Date:</strong> Dec 10, 2025
            </p>
            <p>
              <strong>Status:</strong> Delivered
            </p>
          </li>
          <li className="mb-2">
            <p>
              <strong>Order #:</strong> 654321
            </p>
            <p>
              <strong>Date:</strong> Nov 15, 2025
            </p>
            <p>
              <strong>Status:</strong> Shipped
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
