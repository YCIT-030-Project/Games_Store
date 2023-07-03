import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

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
