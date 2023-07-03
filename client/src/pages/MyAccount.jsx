import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { removeUser } from "../redux/storeSlice";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { app } from "../firebase.config";

const db = getFirestore(app);

const MyAccount = () => {
  const userInfo = useSelector((state) => state.store.userInfo);
  const dispatch = useDispatch();
  const auth = getAuth();

  // Form state
  const [address, setAddress] = useState("");
  const [savedAddress, setSavedAddress] = useState("");
  const [orders, setOrders] = useState([]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetch the address from Firestore when the userInfo updates
  useEffect(() => {
    const fetchAddress = async () => {
      if (userInfo) {
        const userDoc = await getDoc(doc(db, "users", userInfo._id));
        setSavedAddress(userDoc.data().address);
      }
    };

    fetchAddress();
  }, [userInfo]);

  // Fetch the orders from Firestore when the order updates
  useEffect(() => {
    const fetchOrders = async () => {
      if (userInfo) {
        const q = query(
          collection(db, "orders"),
          where("userInfo._id", "==", userInfo._id)
        );
        const querySnapshot = await getDocs(q);
        const userOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(userOrders);
      }
    };

    fetchOrders();
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo) {
      await setDoc(doc(db, "users", userInfo._id), {
        ...userInfo,
        address,
      });

      // Update the saved address
      setSavedAddress(address);

      setAddress("");
    }
  };

  if (!userInfo) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
      <img
        className="w-24 h-24 rounded-full mb-4"
        src={userInfo.image || "defaultImageURL"}
        alt="user"
      />
      <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
      <p className="text-gray-600 mb-4">{userInfo.email}</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-64">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="px-4 py-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded font-bold"
        >
          Save Address
        </button>
      </form>
      <p className="mt-4 text-gray-600">Saved Address: {savedAddress}</p>
      <div className="w-64 mt-4">
        <h3 className="text-xl font-bold mb-2">Your Orders:</h3>
        <div className="flex justify-center gap-7">
          {orders.map((order) => (
            <div key={order.id} className="border rounded mb-4 p-2">
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Total Amount:</strong> ${order.totalAmt}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className=" px-4 py-2 mt-4 bg-red-500 text-white rounded font-bold"
      >
        Sign Out
      </button>
    </div>
  );
};

export default MyAccount;
