import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="card">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
        className="avatar"
      />
      <h2 className="name">John doe</h2>
      <p className="title">Full Stack Developer</p>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta
        harum asperiores eos voluptatum minima accusamus ea impedit? Ea quia
        ullam tenetur laborum inventore incidunt aperiam in dolorum, porro
        magnam. Cumque repellat tempore minus natus? Quia, laboriosam dolores
        eius blanditiis dignissimos quam rerum. Eaque sint provident nostrum
        error animi, sapiente omnis laborum expedita quasi molestiae consectetur
        illum dignissimos dolorum dolor.
      </p>
      <button className="btn">Follow</button>
    </div>
  );
}

export default ProfileCard;
