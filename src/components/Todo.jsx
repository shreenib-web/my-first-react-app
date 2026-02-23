import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add task
  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  // Delete task
  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div style={container}>
      <h2>Todo App 📝</h2>

      <div>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={input}
        />
        <button onClick={addTodo} style={addBtn}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={listItem}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const container = {
  maxWidth: "400px",
  margin: "40px auto",
  textAlign: "center"
};

const input = {
  padding: "10px",
  width: "70%"
};

const addBtn = {
  padding: "10px 15px",
  marginLeft: "10px",
  background: "#2e68b1",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  background: "#f5f5f5",
  marginTop: "10px",
  borderRadius: "5px"
};

const deleteBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer"
};

export default Todo;