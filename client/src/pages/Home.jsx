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
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloribus
      dolorem! Eaque placeat expedita harum dolor distinctio exercitationem
      officia, blanditiis consequuntur molestiae architecto iusto sequi,
      praesentium, doloribus fuga aliquid minima."
        products={products}
      />
    </div>
  );
};

export default Home;
