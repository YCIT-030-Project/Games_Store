import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product.jsx";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import NewsList from "./components/NewsList.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import CreateGame from "./pages/ourgames/CreateGame";
import ComuntyProducts from "./pages/ourgames/ComuntyProducts";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center bg-zinc-100">
        <PacmanLoader color={"#FDE000"} loading={isLoading} size={150} />
      </div>
    );
  }

  return (
    <div className="font-bodyFont">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/comuntygames" element={<ComuntyProducts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
