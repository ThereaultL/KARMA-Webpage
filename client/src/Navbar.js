import logo from "./assets/KARMA_coin.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="KARMA logo" />
      <a href="#profile">
        <p>Profile</p>
      </a>
      <a href="#setlist">
        <p>Setlist</p>
      </a>
      <a href="#events">
        <p>Events</p>
      </a>
      <a href="#pre-order">
        <p>Pre-Order</p>
      </a>
    </div>
  );
}
