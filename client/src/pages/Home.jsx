import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { productsData } from "../api/Api.js";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await productsData();
      setProducts(data.data);
    }

    fetchData();
  }, []);
  return (
    <div>
      <Banner />
      <Products
        title="Shoping"
        desc="Games fetched from Steam API"
        products={products}
      />
    </div>
  );
};

export default Home;
