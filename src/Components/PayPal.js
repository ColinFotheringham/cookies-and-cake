import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function Pay({dataParentToChild}) {
  const total = dataParentToChild;
  const createOrder = (data, actions) =>{
    console.log(total);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "CAD",
            value: data.total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "Af3X6n7Tv2EbLCx91RtQVAbFjsjcNGPv_rgRkECQt37mZN9lh2-WJ8vLoHg7FhaOAWlj3g-alZaBcRDc" }}>
        <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  );
}

export default Pay