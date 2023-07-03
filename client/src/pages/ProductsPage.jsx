import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { productsData } from "../api/Api.js";
import ComuntyProducts from "./ourgames/ComuntyProducts";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await productsData();
      setProducts(data.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Products title="Products" products={products} />
      <ComuntyProducts />
    </>
  );
};

export default ProductsPage;
