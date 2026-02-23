import { useState } from "react";

function ToggleButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Toggle Button</h2>

      <button
        onClick={() => setIsFollowing(!isFollowing)}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          background: isFollowing ? "#ccc" : "#2e68b1",
          color: isFollowing ? "#333" : "#fff",
          cursor: "pointer"
        }}
      >
        {isFollowing ? "Following ✅" : "Follow ➕"}
      </button>
    </div>
  );
}

export default ToggleButton;