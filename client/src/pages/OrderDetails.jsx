import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const order = useSelector((state) => state.store.completedOrder);

  if (!order) {
    return <p>No order details available</p>;
  }

  return (
    <div>
      <h2>Thank you for your order!</h2>
      <p>Total: ${order.total}</p>
      <p>Order details:</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
