import "../styles/container.css";

function PersonInfo({ name, setName, email, setEmail, phoneNumber, setPhone }) {
  return (
    <>
      <div className="container">
        <div>
          <h2>Name: </h2>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Email: </h2>
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h2>Phone Number: </h2>
          <input
            id="phoneInput"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}

export { PersonInfo };
