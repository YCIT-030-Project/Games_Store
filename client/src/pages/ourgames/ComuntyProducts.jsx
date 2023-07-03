import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app } from "../../firebase.config";
const db = getFirestore(app);

const ComuntyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsCollection = collection(db, "games");
      const productsSnapshot = await getDocs(query(productsCollection));
      const data = productsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <Products
        title="Our games"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloribus
  dolorem! Eaque placeat expedita harum dolor distinctio exercitationem
  officia, blanditiis consequuntur molestiae architecto iusto sequi,
  praesentium, doloribus fuga aliquid minima."
        products={products}
      />
    </div>
  );
};

export default ComuntyProducts;
