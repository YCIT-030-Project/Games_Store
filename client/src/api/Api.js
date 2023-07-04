import axios from "axios";

export async function productsData() {
  const products = await axios.get("https://aldukhnback-95bf16f08ede.herokuapp.com/newapi");
  return products;
}
