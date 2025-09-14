// src/components/PayPalButton.js
import React, { useEffect } from "react";

export default function PayPalButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAf8CSZm3e4LNPFWOK7dcYiFeT8p_1EWOw6qFltx2IyV5NKf2D5gEjd1vjwYWwVIXpIkJmR62Ks6SGVb0&components=hosted-buttons&disable-funding=venmo&currency=EUR";
    script.async = true;
    script.onload = () => {
      window.paypal
        .HostedButtons({
          hostedButtonId: "AL453FK92TKPL",
        })
        .render("#paypal-container-AL453FK92TKPL");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div
        id="paypal-container-AL453FK92TKPL"
        style={{
          backgroundColor: "#0070f3",
          padding: "12px 24px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          display: "inline-block",
        }}
      ></div>
    </div>
  );
}
