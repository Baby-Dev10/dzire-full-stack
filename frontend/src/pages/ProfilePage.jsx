// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [addresses, setAddresses] = useState([]);
//   const [orderHistory, setOrderHistory] = useState([]);
//   const [newAddress, setNewAddress] = useState("");
//   const [loading, setLoading] = useState(true);

//   const backendUrl = "http://localhost:4000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please log in to access your profile.");
//       navigate("/login");
//       return;
//     }

//     // Set default authorization header
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/api/user/profile`);

//         if (response.data.success) {
//           setUser(response.data.user);
//           setAddresses(response.data.user.addresses || []);
//           setOrderHistory(response.data.user.orderHistory || []);
//         } else {
//           toast.error(response.data.message);
//           if (response.data.message === "Not authorized") {
//             localStorage.removeItem("token");
//             navigate("/login");
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//         toast.error(
//           error.response?.data?.message || "Failed to load profile data"
//         );
//         if (error.response?.status === 401) {
//           localStorage.removeItem("token");
//           navigate("/login");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [navigate, backendUrl]);

//   const handleAddAddress = async () => {
//     if (!newAddress.trim()) return;

//     try {
//       const response = await axios.post(`${backendUrl}/api/user/address`, {
//         address: newAddress,
//       });

//       if (response.data) {
//         setAddresses([...addresses, response.data]);
//         setNewAddress("");
//         toast.success("Address added successfully");
//       }
//     } catch (error) {
//       toast.error("Failed to add address");
//     }
//   };

//   const handleDeleteAddress = async (id) => {
//     try {
//       await axios.delete(`${backendUrl}/api/user/address/${id}`);
//       setAddresses(addresses.filter((addr) => addr._id !== id));
//       toast.success("Address deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete address");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!user) return null;

//   return (
//     <div className="p-5 sm:p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-5 text-gray-800">My Profile</h1>

//       {/* User Information Section */}
//       <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
//         <h2 className="text-xl font-medium mb-3 text-gray-700">
//           Personal Information
//         </h2>
//         <p>
//           <strong>Name:</strong> {user.name}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//       </div>

//       {/* Saved Addresses Section */}
//       <div className="bg-white p-5 shadow-lg rounded-lg mb-5">
//         <h2 className="text-xl font-medium mb-3 text-gray-700">
//           Saved Addresses
//         </h2>
//         {addresses.map((addr) => (
//           <div
//             key={addr._id}
//             className="mb-4 p-4 border rounded-lg flex justify-between items-start"
//           >
//             <div>
//               <p>{addr.address}</p>
//             </div>
//             <button
//               className="text-red-500 hover:text-red-700"
//               onClick={() => handleDeleteAddress(addr._id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}

//         <div className="mt-5">
//           <input
//             type="text"
//             placeholder="Enter new address"
//             value={newAddress}
//             onChange={(e) => setNewAddress(e.target.value)}
//             className="border p-2 rounded w-full mb-3"
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleAddAddress}
//           >
//             Add New Address
//           </button>
//         </div>
//       </div>

//       {/* Order History Section */}
//       <div className="bg-white p-5 shadow-lg rounded-lg">
//         <h2 className="text-xl font-medium mb-3 text-gray-700">
//           Order History
//         </h2>
//         <ul>
//           {orderHistory.map((order) => (
//             <li key={order._id} className="mb-4">
//               <p>
//                 <strong>Order #:</strong> {order._id}
//               </p>
//               <p>
//                 <strong>Date:</strong>{" "}
//                 {new Date(order.date).toLocaleDateString()}
//               </p>
//               <p>
//                 <strong>Status:</strong> {order.status}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
