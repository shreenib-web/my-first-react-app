import { useState } from "react";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Login / Logout UI</h2>

      {isLoggedIn ? (
        <>
          <h3>Welcome back 👋</h3>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={btnStyle}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Please login</h3>
          <button
            onClick={() => setIsLoggedIn(true)}
            style={btnStyle}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  background: "#2e68b1",
  color: "white",
  cursor: "pointer"
};

export default Auth;