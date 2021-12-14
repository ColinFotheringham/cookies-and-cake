import React from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


function Pay() {
  const createOrder = (data, actions) =>{
      console.log(data);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: 0.01,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  );
}

export default Pay