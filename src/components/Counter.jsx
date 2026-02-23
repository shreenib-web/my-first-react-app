import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        ➖ Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default Counter;