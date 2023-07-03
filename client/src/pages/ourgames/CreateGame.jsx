import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase.config";
import { useSelector } from "react-redux";

const db = getFirestore(app);

const CreateGame = () => {
  const [title, setTitle] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(null);
  const userInfo = useSelector((state) => state.store.userInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const game = {
      title,
      isNew,
      oldPrice,
      price,
      description,
      category,
      image,
      rating,
    };

    // Pushing data to Firestore
    const gameRef = await addDoc(collection(db, "games"), game);

    // Clear form fields after submission
    setTitle("");
    setIsNew(false);
    setOldPrice("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
    setRating(null);
  };

  return (
    <>
      {(userInfo?.email === "abd.aldukhn@gmail.com" && (
        <div className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              Create New Game
            </h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Game Title"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <input
                type="checkbox"
                checked={isNew}
                onChange={() => setIsNew(!isNew)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              Is New?
              <input
                type="text"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                placeholder="Old Price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="New Price"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <input
                type="number"
                value={rating || ""}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
                min="0"
                max="5"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Game
              </button>
            </form>
          </div>
        </div>
      )) || (
        <div className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              You are not authorized to access this page
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateGame;
