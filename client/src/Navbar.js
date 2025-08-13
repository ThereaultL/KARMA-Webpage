import logo from "./assets/KARMA_coin.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="KARMA logo" />
      <a href="#profile">
        <p>Profile</p>
      </a>
      <p>Setlist</p>
      <p>Events</p>
      <p>Pre-Order</p>
    </div>
  );
}
