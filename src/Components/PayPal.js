import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "Af3X6n7Tv2EbLCx91RtQVAbFjsjcNGPv_rgRkECQt37mZN9lh2-WJ8vLoHg7FhaOAWlj3g-alZaBcRDc",
    currency: "CAD",
    intent: "capture",
};

function Pay({dataParentToChild}) {
  const total = dataParentToChild;
  const createOrder = (data, actions) =>{
    console.log(total);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove}/>
    </PayPalScriptProvider>
  );
}

export default Pay