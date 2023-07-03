import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { productsData } from "../api/Api.js";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await productsData();
      setProducts(data.data);
    }

    fetchData();
  }, []);

  return <Products title="Products" products={products} />;
};

export default ProductsPage;
