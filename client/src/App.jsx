import { productsData } from "./api/Api.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product.jsx";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import NewsList from "./components/NewsList.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />

      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return productsData();
        },
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myaccount",
        element: <MyAccount />,
      },
      {
        path: "/news",
        element: <NewsList />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: () => {
          return productsData();
        },
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
