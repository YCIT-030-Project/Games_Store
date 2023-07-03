import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../firebase.config";

const db = getFirestore(app);

const MyAccount = () => {
  const userInfo = useSelector((state) => state.store.userInfo);

  // Form state
  const [address, setAddress] = useState("");
  const [savedAddress, setSavedAddress] = useState("");

  // Fetch the address from Firestore when the component mounts or userInfo updates
  useEffect(() => {
    const fetchAddress = async () => {
      if (userInfo) {
        const userDoc = await getDoc(doc(db, "users", userInfo._id));
        setSavedAddress(userDoc.data().address);
      }
    };

    fetchAddress();
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo) {
      await setDoc(doc(db, "users", userInfo._id), {
        ...userInfo,
        address,
      });

      // Update the saved address state
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
      <p className="mt-4 text-gray-600">Saved Address: {savedAddress}</p>{" "}
      {/* Display the saved address */}
    </div>
  );
};

export default MyAccount;
