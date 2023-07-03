import axios from "axios";

export async function productsData() {
  const products = await axios.get("http://localhost:3001/newapi");
  return products;
}
