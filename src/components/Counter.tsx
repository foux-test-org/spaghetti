import { useState, useEffect } from "react";
import { format_number } from "../helpers/formatters";

// This component renders a <style> tag directly in JSX
// Yes, we know. No, we won't fix it.

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(245, 158, 11, 0.3); }
          50% { text-shadow: 0 0 25px rgba(245, 158, 11, 0.6), 0 0 50px rgba(245, 158, 11, 0.3); }
        }
        .spaghetti-counter {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .counter-container {
          background: linear-gradient(135deg, #451a03, #78350f);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          border: 2px solid #92400e;
        }
        .counter-label {
          color: #fbbf24;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .counter-value {
          color: #fef3c7;
          font-size: 3rem;
          font-weight: 900;
          font-family: 'Georgia', serif;
        }
        .counter-unit {
          color: #d97706;
          font-size: 0.9rem;
          margin-top: 4px;
        }
      `}</style>
      <div className="counter-container">
        <p className="counter-label">Spaghetti Strands Consumed During Your Visit</p>
        <p className="counter-value spaghetti-counter">{format_number(count)}</p>
        <p className="counter-unit">strands and counting...</p>
      </div>
    </>
  );
};

export default Counter;
