function User({ title, first, last, gender, pictureURL }) {
  return (
    <div className={gender === "female" ? "femaleUser" : "maleUser"}>
      <h2>
        {title} {first} {last}
      </h2>
      <p>{gender}</p>
      <img src={pictureURL} alt={first} />
    </div>
  );
}

export default User;
