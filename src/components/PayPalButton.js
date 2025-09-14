// src/components/PayPalButton.js
import React, { useEffect } from "react";

export default function PayPalButton() {
  useEffect(() => {
    // PayPal SDK Script dynamisch einfügen
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAf8CSZm3e4LNPFWOK7dcYiFeT8p_1EWOw6qFltx2IyV5NKf2D5gEjd1vjwYWwVIXpIkJmR62Ks6SGVb0&components=hosted-buttons&disable-funding=venmo&currency=EUR";
    script.async = true;
    script.onload = () => {
      // Button nach Laden des SDK rendern
      window.paypal.HostedButtons({
        hostedButtonId: "AL453FK92TKPL",
      }).render("#paypal-container-AL453FK92TKPL");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2>Starte jetzt mit deinem eigenen Coach-Bot!</h2>
      <div id="paypal-container-AL453FK92TKPL"></div>
    </div>
  );
}
