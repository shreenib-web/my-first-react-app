import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Reusable Button Demo</h2>

      <Button text="Save" onClick={() => alert("Saved")} />

      <Button
        text="Cancel"
        type="secondary"
        onClick={() => alert("Cancelled")}
      />

      <Button text="Delete" type="danger" onClick={() => alert("Deleted")} />
      <ProfileCard />
      <ProfileCard />

      <ProfileCard />
    </div>
  );
}

export default App;