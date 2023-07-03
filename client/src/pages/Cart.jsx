import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { restCart } from "../redux/storeSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.store.productData);
  const userInfo = useSelector((state) => state.store.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Login First");
    }
  };

  const payment = async (token) => {
    const response = await axios.post("http://127.0.0.1:3001/pay", {
      amount: totalAmt * 100,
      token: token,
    });

    if (response.status === 200) {
      // check if payment was successful clear the cart and show success toast
      dispatch(restCart());
      toast.success("Your order has been completed!");
    } else {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://www.gamestop.ca/Views/Locale/Content/Images/heroslider/8007-SquareEnixFinalFantasyXVIPreSell-LaunchHeroSlider/BIL/slider@2000w.jpg"
        alt=""
      />
      <div className=" max-w-screen-xl mx-auto py-20 flex ">
        <CartItem />
        <div className=" w-1/3 bg-[#fafafa] py-6 px-4 ">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              Shipping
              <span>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </span>
            </p>
          </div>
          <p className=" font-titleFont font-semibold flex justify-between mt-6  ">
            Total <span className=" text-xl font-bold ">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            className=" text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 "
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey={import.meta.env.VITE_API_KEY_stripeKey}
                name="Ecommerce"
                amount={totalAmt * 100}
                label="pay to Games"
                description={`Your total is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
