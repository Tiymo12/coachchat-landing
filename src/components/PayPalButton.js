// src/components/PayPalButton.js
import React, { useEffect } from "react";

export default function PayPalButton() {
  useEffect(() => {
    const CONTAINER_ID = "paypal-container-AL453FK92TKPL";
    const SDK_ID = "paypal-sdk-hosted-buttons";

    const renderButton = () => {
      const el = document.getElementById(CONTAINER_ID);
      if (el) el.innerHTML = ""; // doppelte Buttons verhindern
      window.paypal?.HostedButtons({
        hostedButtonId: "AL453FK92TKPL",
      }).render(`#${CONTAINER_ID}`);
    };

    if (window.paypal) {
      renderButton();
      return;
    }

    let script = document.getElementById(SDK_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SDK_ID;
      script.src =
        "https://www.paypal.com/sdk/js?client-id=BAAf8CSZm3e4LNPFWOK7dcYiFeT8p_1EWOw6qFltx2IyV5NKf2D5gEjd1vjwYWwVIXpIkJmR62Ks6SGVb0&components=hosted-buttons&disable-funding=venmo&currency=EUR";
      script.async = true;
      script.onload = renderButton;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", renderButton, { once: true });
      if (script.readyState === "complete") renderButton();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div id="paypal-container-AL453FK92TKPL"></div>
    </div>
  );
}
