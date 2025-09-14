import PayPalButton from "./components/PayPalButton";
import ChatWidget from "./components/ChatWidget";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>CoachChat AI</h1>
        <p>Dein persönlicher AI-Chatbot für Social Media</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Automatisiere dein Social Media Business</h2>
        <p>
          Gewinne mehr Kunden, spare Zeit und steigere deine Reichweite – mit
          deinem eigenen AI-Chatbot.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>🚀 Mehr Reichweite</h3>
          <p>Beantworte Nachrichten 24/7 und steigere deine Sichtbarkeit.</p>
        </div>
        <div className="feature">
          <h3>⏳ Zeit sparen</h3>
          <p>Automatisiere Standardfragen und fokussiere dich auf dein Business.</p>
        </div>
        <div className="feature">
          <h3>💰 Mehr Umsatz</h3>
          <p>Nutze smarte Funnels, um Leads in zahlende Kunden zu verwandeln.</p>
        </div>
      </section>

      {/* Call to Action / PayPal-Button */}
      <section className="cta">
        <h2>Starte jetzt mit deinem eigenen Coach-Bot!</h2>
        <PayPalButton />
        <p>Die Bezahlung läuft sicher über PayPal.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CoachChat AI – Alle Rechte vorbehalten</p>
      </footer>

      <ChatWidget persona={`Tonfall: motivierend, knapp. Du repräsentierst einen Fitness-Coach mit 50k Followern.`} />
    </div>
  );
}

export default App;
