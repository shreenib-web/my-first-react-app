// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import App from "./App"; // Main App component
import "./index.css"; // Optional: Your CSS file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrapping the App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);