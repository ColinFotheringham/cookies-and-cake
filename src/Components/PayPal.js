import React from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


function Pay({dataParentToChild}) {
    console.log({dataParentToChild});
  const createOrder = (dataParentToChild, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: dataParentToChild,
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