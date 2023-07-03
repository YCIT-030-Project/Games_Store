import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return <Products title="Products" products={products} />;
};

export default ProductsPage;
